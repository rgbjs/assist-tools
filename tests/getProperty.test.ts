import { describe, test, expect } from 'vitest'
import { getProperty } from '../src/main'

describe('getProperty', () => {
	const symbol = Symbol()
	const objPrototype = {
		a: 1,
		b: 2,
		[symbol]: 3
	}

	const obj = Object.create(objPrototype)
	obj.a = 4
	test('获取不包含原型', () => {
		expect(getProperty(obj, ['a', 'b', symbol])).toEqual({
			a: 4
		})
	})

	test('获取包含原型', () => {
		expect(getProperty(obj, ['a', 'b', symbol], true)).toEqual({
			a: 4,
			b: 2,
			[symbol]: 3
		})
	})
})
