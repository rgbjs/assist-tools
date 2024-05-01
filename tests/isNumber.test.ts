import { describe, test, expect } from 'vitest'
import { isNumber } from '../src/main'

describe('isNumber', () => {
	test('数字类型', () => {
		expect(isNumber(1)).toBe(true)
		expect(isNumber(NaN)).toBe(true)
		expect(isNumber(Infinity)).toBe(true)
		expect(isNumber(-Infinity)).toBe(true)
		expect(isNumber(-Infinity, 1, 2)).toBe(true)
	})

	test('非数字类型', () => {
		expect(isNumber('1')).toBe(false)
		expect(isNumber('')).toBe(false)
		expect(isNumber(null)).toBe(false)
		expect(isNumber()).toBe(false)
		expect(isNumber(1, null)).toBe(false)
	})
})
