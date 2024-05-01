import { describe, expect, test } from 'vitest'
import { cloneEffectiveValue } from '../src/main'

describe('cloneEffectiveValue', () => {
	test(`获取数组内所有有效数据`, () => {
		const symbol = Symbol('哈哈')
		const arr = [
			1,
			'a',
			false,
			[symbol, BigInt(20)],
			undefined,
			null,
			{
				a: undefined,
				b: true,
				c: false,
				d: NaN,
				e: Infinity,
				f: -Infinity,
				g: '',
				symbol
			}
		]

		expect(cloneEffectiveValue(arr)).toEqual([
			1,
			'a',
			false,
			[symbol, BigInt(20)],
			{
				b: true,
				c: false,
				symbol
			}
		])
	})

	test('获取对象内所有有效数据', () => {
		const symbol = Symbol('呵呵')
		const obj = {
			a: 1,
			b: 'b',
			c: false,
			d: true,
			f: undefined,
			g: null,
			h: NaN,
			i: Infinity,
			j: -Infinity,
			k: '',
			l: symbol,
			m: [1, 'b', false, true, undefined, null, NaN, Infinity, -Infinity],
			n: {
				a: 1,
				b: 'b',
				c: false,
				d: true,
				f: undefined,
				g: null,
				h: NaN,
				i: Infinity,
				j: -Infinity,
				k: '',
				l: symbol,
				m: [1, 'b', false, true, undefined, null, NaN, Infinity, -Infinity]
			}
		}

		expect(cloneEffectiveValue(obj)).toEqual({
			a: 1,
			b: 'b',
			c: false,
			d: true,
			l: symbol,
			m: [1, 'b', false, true],
			n: {
				a: 1,
				b: 'b',
				c: false,
				d: true,
				l: symbol,
				m: [1, 'b', false, true]
			}
		})
	})
})
