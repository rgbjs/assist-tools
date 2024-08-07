import { describe, test, expect } from 'vitest'
import { setDefaultDataAll } from '../src/main'

describe('setDefaultDataAll', () => {
	test('setDefaultDataAll 测试', () => {
		const symbol = Symbol()
		const obj = {
			a: 0,
			b: false,
			c: null,
			d: NaN,
			e: '',
			f: undefined,
			g: 'undefind',
			[symbol]: undefined
		}
		expect(setDefaultDataAll(obj, { a: 1, b: 2 }, { c: 3, d: 4, e: 5, f: 6, g: 7, [symbol]: 8 })).toEqual({
			a: 0,
			b: false,
			c: null,
			d: NaN,
			e: '',
			f: 6,
			g: 'undefind',
			[symbol]: 8
		})
	})
})
