import { describe, test, expect } from 'vitest'
import { isDecimalLen } from '../src/main'

describe('isDecimalLen', () => {
	test('判断整数', () => {
		expect(isDecimalLen(2024, 0, 2)).toBe(true)
		expect(isDecimalLen(2024, 1, 2)).toBe(false)
	})

	test('判断小数', () => {
		expect(isDecimalLen(2024.1, 0, 2)).toBe(true)
		expect(isDecimalLen(2024.123, 1, 2)).toBe(false)
	})

	test('判断 Infinity 与 -Infinity', () => {
		expect(isDecimalLen(Infinity, 0, 2)).toBe(true)
		expect(isDecimalLen(-Infinity, 1, 2)).toBe(false)
	})

	test('判断 NaN', () => {
		expect(isDecimalLen(NaN, 0, 2)).toBe(false)
	})

	test('判断非数字', () => {
		expect(isDecimalLen('12.1' as unknown as number, 0, 2)).toBe(false)
	})

	test.fails('判断错误参数', () => {
		// @ts-ignore
		expect(isDecimalLen()).toBe(false)
	})
})
