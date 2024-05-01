import { describe, test, expect } from 'vitest'
import { isType } from '../src/main'

describe('isType', () => {
	test('数字', () => {
		expect(isType(1)).toBe('number')
	})

	test('字符串', () => {
		expect(isType('')).toBe('string')
	})

	test('布尔', () => {
		expect(isType(true)).toBe('boolean')
	})

	test('undefined', () => {
		// @ts-ignore
		expect(isType()).toBe('undefined')
		expect(isType(undefined)).toBe('undefined')
	})

	test('null', () => {
		expect(isType(null)).toBe('null')
	})

	test('bigint', () => {
		expect(isType(BigInt(1))).toBe('bigint')
	})

	test('symbol', () => {
		expect(isType(Symbol(1))).toBe('symbol')
	})

	test('function', () => {
		expect(isType(() => {})).toBe('function')
		expect(isType(function () {})).toBe('function')
		expect(isType(Object)).toBe('function')
	})

	test('array', () => {
		expect(isType([])).toBe('array')
	})

	test('object', () => {
		expect(isType({})).toBe('object')
		expect(isType(new Object())).toBe('object')
		expect(isType(new Date())).toBe('object')
	})
})
