import { describe, test, expect } from 'vitest'
import { mapData } from '../src/main'

describe('mapData', () => {
	const symbol = Symbol()
	test('不更新 target 对象', () => {
		const obj = {
			a: 1,
			b: 2,
			[symbol]: 3
		}

		const newObj = mapData(obj, {
			a(value) {
				return value + 1
			},
			b(value) {
				return value + 1
			},
			[symbol](value) {
				return value + 1
			}
		})
		expect(newObj).toEqual({
			a: 2,
			b: 3,
			[symbol]: 4
		})
	})

	test('更新 target 对象', () => {
		const obj = {
			a: 1,
			b: 2,
			[symbol]: 3
		}

		mapData(
			obj,
			{
				a(value) {
					return value + 1
				},
				b(value) {
					return value + 1
				},
				[symbol](value) {
					return value + 1
				}
			},
			true
		)
		expect(obj).toEqual({
			a: 2,
			b: 3,
			[symbol]: 4
		})
	})
})
