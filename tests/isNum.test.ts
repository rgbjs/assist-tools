import { describe, test, expect } from 'vitest'
import { isNum } from '../src/main'

describe('isNum', () => {
	test('有效数字', () => {
		expect(isNum(1)).toBe(true)
		expect(isNum(1.1)).toBe(true)
		expect(isNum(0)).toBe(true)
		expect(isNum(-0)).toBe(true)
		expect(isNum(-1)).toBe(true)
		expect(isNum(-1.1)).toBe(true)
		expect(isNum(1, 0, -0, -1, -1.1)).toBe(true)
	})

	test('NaN', () => {
		expect(isNum(NaN)).toBe(false)
	})

	test('Infinity 与 -Infinity', () => {
		expect(isNum(Infinity)).toBe(false)
		expect(isNum(-Infinity)).toBe(false)
	})

	test('字符串 与 空串', () => {
		expect(isNum('1')).toBe(false)
		expect(isNum('')).toBe(false)
		expect(isNum(1, 2, '')).toBe(false)
	})

	test('undefined', () => {
		expect(isNum()).toBe(false)
		expect(isNum(undefined)).toBe(false)
	})

	test('null', () => {
		expect(isNum(null)).toBe(false)
	})
})
