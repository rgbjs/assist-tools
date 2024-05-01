import { describe, test, expect } from 'vitest'
import { isPositiveInt } from '../src/main'

describe('isPositiveInt', () => {
	test('正整数', () => {
		expect(isPositiveInt(1)).toBe(true)
		expect(isPositiveInt(100)).toBe(true)
		expect(isPositiveInt(1, 10, 100)).toBe(true)
	})

	test('非正整数', () => {
		expect(isPositiveInt(0)).toBe(false)
		expect(isPositiveInt(-0)).toBe(false)
		expect(isPositiveInt(-1)).toBe(false)
		expect(isPositiveInt(Infinity)).toBe(false)
		expect(isPositiveInt(-Infinity)).toBe(false)
		expect(isPositiveInt(NaN)).toBe(false)
		expect(isPositiveInt(1.1)).toBe(false)
		expect(isPositiveInt('1')).toBe(false)
		expect(isPositiveInt('a')).toBe(false)
		expect(isPositiveInt()).toBe(false)
		expect(isPositiveInt(null)).toBe(false)
		expect(isPositiveInt(1, 2, 0)).toBe(false)
	})
})
