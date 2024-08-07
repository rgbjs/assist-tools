import { describe, test, expect } from 'vitest'
import { setDefaultData } from '../src/main'

describe('setDefaultData', () => {
	test('setDefaultData 测试', () => {
		const symbol = Symbol()
		const obj = {
			a: 0,
			b: false,
			c: null,
			d: NaN,
			e: '',
			f: undefined,
			g: 'undefind',
			[symbol]: 10
		}

		const result = setDefaultData({}, obj)
		expect(result).toEqual({
			a: 0,
			b: false,
			c: null,
			d: NaN,
			e: '',
			f: undefined,
			g: 'undefind'
		})
	})
})
