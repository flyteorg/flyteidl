package coreutils

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestFetchLiteral(t *testing.T) {
	t.Run("Primitive", func(t *testing.T) {
		lit, err := MakeLiteral("test_string")
		assert.NoError(t, err)
		val, err := FetchFromLiteral(lit)
		assert.NoError(t, err)
		assert.Equal(t, "test_string", val)
	})

	t.Run("Array", func(t *testing.T) {
		lit, err := MakeLiteral([]interface{}{1, 2, 3})
		assert.NoError(t, err)
		val, err := FetchFromLiteral(lit)
		assert.NoError(t, err)
		arr := []interface{}{int64(1), int64(2), int64(3)}
		assert.Equal(t, arr, val)
	})

	t.Run("Map", func(t *testing.T) {
		mapInstance := map[string]interface{}{
			"key1": []interface{}{1, 2, 3},
			"key2": []interface{}{5},
		}
		lit, err := MakeLiteral(mapInstance)
		assert.NoError(t, err)
		val, err := FetchFromLiteral(lit)
		assert.NoError(t, err)
		expectedMapInstance := map[string]interface{}{
			"key1": []interface{}{int64(1), int64(2), int64(3)},
			"key2": []interface{}{int64(5)},
		}
		assert.Equal(t, expectedMapInstance, val)
	})

	t.Run("Map_Booleans", func(t *testing.T) {
		mapInstance := map[string]interface{}{
			"key1": []interface{}{true, false, true},
			"key2": []interface{}{false},
		}
		lit, err := MakeLiteral(mapInstance)
		assert.NoError(t, err)
		val, err := FetchFromLiteral(lit)
		assert.NoError(t, err)
		assert.Equal(t, mapInstance, val)
	})

	t.Run("Map_Floats", func(t *testing.T) {
		mapInstance := map[string]interface{}{
			"key1": []interface{}{1.0, 2.0, 3.0},
			"key2": []interface{}{1.0},
		}
		lit, err := MakeLiteral(mapInstance)
		assert.NoError(t, err)
		val, err := FetchFromLiteral(lit)
		assert.NoError(t, err)
		expectedMapInstance := map[string]interface{}{
			"key1": []interface{}{float64(1.0), float64(2.0), float64(3.0)},
			"key2": []interface{}{float64(1.0)},
		}
		assert.Equal(t, expectedMapInstance, val)
	})

	t.Run("NestedMap", func(t *testing.T) {
		mapInstance := map[string]interface{}{
			"key1": map[string]interface{}{"key11": 1.0, "key12": 2.0, "key13": 3.0},
			"key2": map[string]interface{}{"key21": 1.0},
		}
		lit, err := MakeLiteral(mapInstance)
		assert.NoError(t, err)
		val, err := FetchFromLiteral(lit)
		assert.NoError(t, err)
		expectedMapInstance := map[string]interface{}{
			"key1": map[string]interface{}{"key11": float64(1.0), "key12": float64(2.0), "key13": float64(3.0)},
			"key2": map[string]interface{}{"key21": float64(1.0)},
		}
		assert.Equal(t, expectedMapInstance, val)
	})

	t.Run("Binary", func(t *testing.T) {
		s := MakeBinaryLiteral([]byte{'h'})
		assert.Equal(t, []byte{'h'}, s.GetScalar().GetBinary().GetValue())
		_, err := FetchFromLiteral(s)
		assert.NotNil(t, err)
	})

	t.Run("NoneType", func(t *testing.T) {
		p, err := MakeLiteral(nil)
		assert.NoError(t, err)
		assert.NotNil(t, p.GetScalar())
		_, err = FetchFromLiteral(p)
		assert.NotNil(t, err)
	})
}
