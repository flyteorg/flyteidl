package coreutils

import (
	"fmt"

	"github.com/lyft/flyteidl/gen/pb-go/flyteidl/core"
)

func FetchFromLiteral(literal *core.Literal) (interface{}, error) {
	switch literalValue := literal.Value.(type) {
	case *core.Literal_Scalar:
		switch scalarValue := literalValue.Scalar.Value.(type) {
		case *core.Scalar_Primitive:
			switch scalarPrimitive := scalarValue.Primitive.Value.(type) {
			case *core.Primitive_Integer:
				scalarPrimitiveInt := scalarPrimitive.Integer
				return scalarPrimitiveInt, nil
			case *core.Primitive_FloatValue:
				scalarPrimitiveFloat := scalarPrimitive.FloatValue
				return scalarPrimitiveFloat, nil
			case *core.Primitive_StringValue:
				scalarPrimitiveString := scalarPrimitive.StringValue
				return scalarPrimitiveString, nil
			case *core.Primitive_Boolean:
				scalarPrimitiveBoolean := scalarPrimitive.Boolean
				return scalarPrimitiveBoolean, nil
			case *core.Primitive_Datetime:
				scalarPrimitiveDateTime := scalarPrimitive.Datetime
				return scalarPrimitiveDateTime, nil
			case *core.Primitive_Duration:
				scalarPrimitiveDuration := scalarPrimitive.Duration
				return scalarPrimitiveDuration, nil
			}
			return nil, fmt.Errorf("unsupported literal scalar type %T", scalarValue)
		}
	case *core.Literal_Collection:
		collectionValue := literalValue.Collection.Literals
		collection := make([]interface{}, len(collectionValue))
		for index, val := range collectionValue {
			if collectionElem, err := FetchFromLiteral(val); err == nil {
				collection[index] = collectionElem
			} else {
				return nil, err
			}
		}
		return collection, nil
	case *core.Literal_Map:
		mapLiteralValue := literalValue.Map.Literals
		mapResult := make(map[string]interface{}, len(mapLiteralValue))
		for key, val := range mapLiteralValue {
			if val, err := FetchFromLiteral(val); err == nil {
				mapResult[key] = val
			} else {
				return nil, err
			}
		}
		return mapResult, nil
	}
	return nil, fmt.Errorf("unsupported literal type %T", literal)
}
