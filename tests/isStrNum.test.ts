import { describe, test, expect } from 'vitest'
import { isStrNum } from '../src/main'

describe('isStrNum', () => {
	test('数字', () => {
		expect(isStrNum(1)).toBe(true)
		expect(isStrNum(1.1)).toBe(true)
	})

	test('NaN', () => {
		expect(isStrNum(NaN)).toBe(false)
	})

	test('Infinity 与 -Infinity', () => {
		expect(isStrNum(Infinity)).toBe(false)
		expect(isStrNum(-Infinity)).toBe(false)
	})

	test('普通数字字符串', () => {
		expect(isStrNum('1', false)).toBe(true)
		expect(isStrNum('0', false)).toBe(true)
		expect(isStrNum('-0', false)).toBe(true)
		expect(isStrNum('-1', false)).toBe(true)
		expect(isStrNum('-1.1', false)).toBe(true)
		expect(isStrNum('1.1', false)).toBe(true)
		expect(isStrNum('1.1000', false)).toBe(true)
		expect(isStrNum('   1.1000', false)).toBe(true)
		expect(isStrNum('1.1000   ', false)).toBe(true)
		expect(isStrNum('   1.1000   ', false)).toBe(true)
		expect(isStrNum('   1.   ', false)).toBe(true)
		expect(isStrNum('   .1   ', false)).toBe(true)
		expect(isStrNum('   .0   ', false)).toBe(true)
	})

	test('严格数字字符串', () => {
		expect(isStrNum('  1')).toBe(false)
		expect(isStrNum('1  ')).toBe(false)
		expect(isStrNum('  1  ')).toBe(false)
		expect(isStrNum('   -0')).toBe(false)
		expect(isStrNum('.1')).toBe(false)
		expect(isStrNum('1.')).toBe(false)
		expect(isStrNum('')).toBe(false)
		expect(isStrNum('1n')).toBe(false)
	})
})
