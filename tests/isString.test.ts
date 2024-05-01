import { describe, test, expect } from 'vitest'
import { isString } from '../src/main'

describe('isString', () => {
	test('字符串类型', () => {
		expect(isString('')).toBe(true)
		expect(isString('a')).toBe(true)
		expect(isString('1')).toBe(true)
		expect(isString('1', 'a')).toBe(true)
	})

	test('非字符串类型', () => {
		expect(isString(1)).toBe(false)
		expect(isString()).toBe(false)
		expect(isString(null)).toBe(false)
		expect(isString(undefined)).toBe(false)
		expect(isString('', 'a', 1)).toBe(false)
	})
})
