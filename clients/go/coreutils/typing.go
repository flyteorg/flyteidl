package coreutils

import (
	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/core"
	"golang.org/x/exp/maps"
	"golang.org/x/exp/slices"
	"k8s.io/apimachinery/pkg/util/sets"
)

func literalTypeForPrimitive(primitive *core.Primitive) *core.LiteralType {
	simpleType := core.SimpleType_NONE
	switch primitive.GetValue().(type) {
	case *core.Primitive_Integer:
		simpleType = core.SimpleType_INTEGER
	case *core.Primitive_FloatValue:
		simpleType = core.SimpleType_FLOAT
	case *core.Primitive_StringValue:
		simpleType = core.SimpleType_STRING
	case *core.Primitive_Boolean:
		simpleType = core.SimpleType_BOOLEAN
	case *core.Primitive_Datetime:
		simpleType = core.SimpleType_DATETIME
	case *core.Primitive_Duration:
		simpleType = core.SimpleType_DURATION
	}

	return &core.LiteralType{Type: &core.LiteralType_Simple{Simple: simpleType}}
}

// Gets literal type for scalar value. This can be used to compare the underlying type of two scalars for compatibility.
func literalTypeForScalar(scalar *core.Scalar) *core.LiteralType {
	// TODO: Should we just pass the type information with the value?  That way we don't have to guess?
	var literalType *core.LiteralType
	switch v := scalar.GetValue().(type) {
	case *core.Scalar_Primitive:
		literalType = literalTypeForPrimitive(scalar.GetPrimitive())
	case *core.Scalar_Blob:
		if scalar.GetBlob().GetMetadata() == nil {
			return nil
		}

		literalType = &core.LiteralType{Type: &core.LiteralType_Blob{Blob: scalar.GetBlob().GetMetadata().GetType()}}
	case *core.Scalar_Binary:
		literalType = &core.LiteralType{Type: &core.LiteralType_Simple{Simple: core.SimpleType_BINARY}}
	case *core.Scalar_Schema:
		literalType = &core.LiteralType{
			Type: &core.LiteralType_Schema{
				Schema: scalar.GetSchema().Type,
			},
		}
	case *core.Scalar_StructuredDataset:
		if v.StructuredDataset == nil || v.StructuredDataset.Metadata == nil {
			return &core.LiteralType{
				Type: &core.LiteralType_StructuredDatasetType{},
			}
		}

		literalType = &core.LiteralType{
			Type: &core.LiteralType_StructuredDatasetType{
				StructuredDatasetType: scalar.GetStructuredDataset().GetMetadata().StructuredDatasetType,
			},
		}
	case *core.Scalar_NoneType:
		literalType = &core.LiteralType{Type: &core.LiteralType_Simple{Simple: core.SimpleType_NONE}}
	case *core.Scalar_Error:
		literalType = &core.LiteralType{Type: &core.LiteralType_Simple{Simple: core.SimpleType_ERROR}}
	case *core.Scalar_Generic:
		literalType = &core.LiteralType{Type: &core.LiteralType_Simple{Simple: core.SimpleType_STRUCT}}
	case *core.Scalar_Union:
		literalType = &core.LiteralType{
			Type: &core.LiteralType_UnionType{
				UnionType: &core.UnionType{
					Variants: []*core.LiteralType{
						scalar.GetUnion().GetType(),
					},
				},
			},
		}
	default:
		return nil
	}

	return literalType
}

// LiteralTypeForLiteral gets LiteralType for literal, nil if the value of literal is unknown, or type collection/map of
// type None if the literal is a non-homogeneous type.
func LiteralTypeForLiteral(l *core.Literal) *core.LiteralType {
	switch l.GetValue().(type) {
	case *core.Literal_Scalar:
		return literalTypeForScalar(l.GetScalar())
	case *core.Literal_Collection:
		return &core.LiteralType{
			Type: &core.LiteralType_CollectionType{
				CollectionType: literalTypeForLiterals(l.GetCollection().Literals),
			},
		}
	case *core.Literal_Map:
		return &core.LiteralType{
			Type: &core.LiteralType_MapValueType{
				MapValueType: literalTypeForLiterals(maps.Values(l.GetMap().Literals)),
			},
		}
	}

	return nil
}

func literalTypeForLiterals(literals []*core.Literal) *core.LiteralType {
	innerType := make([]*core.LiteralType, 0, 1)
	innerTypeSet := sets.NewString()
	for _, x := range literals {
		otherType := LiteralTypeForLiteral(x)
		otherTypeKey := otherType.String()

		if !innerTypeSet.Has(otherTypeKey) {
			innerType = append(innerType, otherType)
			innerTypeSet.Insert(otherTypeKey)
		}
	}

	if len(innerType) == 0 {
		return &core.LiteralType{
			Type: &core.LiteralType_Simple{Simple: core.SimpleType_NONE},
		}
	} else if len(innerType) == 1 {
		return innerType[0]
	}

	// sort inner types to ensure consistent union types are generated
	slices.SortFunc(innerType, func(a, b *core.LiteralType) bool { return a.String() < b.String() })

	return &core.LiteralType{
		Type: &core.LiteralType_UnionType{
			UnionType: &core.UnionType{
				Variants: innerType,
			},
		},
	}
}
