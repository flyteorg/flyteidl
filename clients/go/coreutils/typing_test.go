package coreutils

import (
	"testing"

	"github.com/flyteorg/flyteidl/gen/pb-go/flyteidl/core"
	"github.com/stretchr/testify/assert"
)

func TestLiteralTypeForLiterals(t *testing.T) {
	t.Run("empty", func(t *testing.T) {
		lt := literalTypeForLiterals(nil)
		assert.Equal(t, core.SimpleType_NONE.String(), lt.GetSimple().String())
	})

	t.Run("homogenous", func(t *testing.T) {
		lt := literalTypeForLiterals([]*core.Literal{
			MustMakeLiteral(5),
			MustMakeLiteral(0),
			MustMakeLiteral(5),
		})

		assert.Equal(t, core.SimpleType_INTEGER.String(), lt.GetSimple().String())
	})

	t.Run("non-homogenous", func(t *testing.T) {
		lt := literalTypeForLiterals([]*core.Literal{
			MustMakeLiteral("hello"),
			MustMakeLiteral(5),
			MustMakeLiteral("world"),
			MustMakeLiteral(0),
			MustMakeLiteral(2),
		})

		assert.Len(t, lt.GetUnionType().Variants, 2)
		assert.Equal(t, core.SimpleType_INTEGER.String(), lt.GetUnionType().Variants[0].GetSimple().String())
		assert.Equal(t, core.SimpleType_STRING.String(), lt.GetUnionType().Variants[1].GetSimple().String())
	})

	t.Run("non-homogenous ensure ordering", func(t *testing.T) {
		lt := literalTypeForLiterals([]*core.Literal{
			MustMakeLiteral(5),
			MustMakeLiteral("world"),
			MustMakeLiteral(0),
			MustMakeLiteral(2),
		})

		assert.Len(t, lt.GetUnionType().Variants, 2)
		assert.Equal(t, core.SimpleType_INTEGER.String(), lt.GetUnionType().Variants[0].GetSimple().String())
		assert.Equal(t, core.SimpleType_STRING.String(), lt.GetUnionType().Variants[1].GetSimple().String())
	})
}
