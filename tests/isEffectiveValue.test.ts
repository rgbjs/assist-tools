import { describe, test, expect } from 'vitest'
import { isEffectiveValue } from '../src/main'

describe('isEffectiveValue', () => {
	test('判断有效值', () => {
		expect(isEffectiveValue(Symbol())).toBe(true)
		expect(isEffectiveValue(false)).toBe(true)
		expect(isEffectiveValue(0)).toBe(true)
		expect(isEffectiveValue(false, 0)).toBe(true)
	})

	test('判断无效值', () => {
		expect(isEffectiveValue()).toBe(false)
		expect(isEffectiveValue(null)).toBe(false)
		expect(isEffectiveValue(undefined)).toBe(false)
		expect(isEffectiveValue(Infinity)).toBe(false)
		expect(isEffectiveValue(-Infinity)).toBe(false)
		expect(isEffectiveValue(NaN)).toBe(false)
		expect(isEffectiveValue('')).toBe(false)
		expect(isEffectiveValue(1, 2, 3, '')).toBe(false)
	})
})
