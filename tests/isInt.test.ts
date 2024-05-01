import { describe, test, expect } from 'vitest'
import { isInt } from '../src/main'

describe('isInt', () => {
	test('整数', () => {
		expect(isInt(1)).toBe(true)
		expect(isInt(1, 2)).toBe(true)
	})

	test('负整数', () => {
		expect(isInt(-1)).toBe(true)
	})

	test('0 与 -0', () => {
		expect(isInt(0)).toBe(true)
		expect(isInt(-0)).toBe(true)
	})

	test('Infinity 与 -Infinity', () => {
		expect(isInt(Infinity)).toBe(false)
		expect(isInt(-Infinity)).toBe(false)
	})

	test('浮点数', () => {
		expect(isInt(1.1)).toBe(false)
		expect(isInt(-1.1)).toBe(false)
	})

	test('NaN', () => {
		expect(isInt(NaN)).toBe(false)
	})

	test('非数字', () => {
		expect(isInt()).toBe(false)
		expect(isInt(undefined)).toBe(false)
		expect(isInt(null)).toBe(false)
		expect(isInt('0')).toBe(false)
		expect(isInt('1')).toBe(false)
		expect(isInt('a')).toBe(false)
		expect(isInt('')).toBe(false)
		expect(isInt(1, 2, '')).toBe(false)
	})
})
