import { describe, test, expect } from 'vitest'
import { isId } from '../src/main'

describe('isId', () => {
	test('正确的 ID', () => {
		expect(isId(1)).toBe(true)
		expect(isId(100)).toBe(true)
		expect(isId(1, 10, 100)).toBe(true)
	})

	test('错误的 ID', () => {
		expect(isId(0)).toBe(false)
		expect(isId(-0)).toBe(false)
		expect(isId(-1)).toBe(false)
		expect(isId(Infinity)).toBe(false)
		expect(isId(-Infinity)).toBe(false)
		expect(isId(NaN)).toBe(false)
		expect(isId(1.1)).toBe(false)
		expect(isId('1')).toBe(false)
		expect(isId('a')).toBe(false)
		expect(isId()).toBe(false)
		expect(isId(null)).toBe(false)
		expect(isId(1, 2, 0)).toBe(false)
	})
})
