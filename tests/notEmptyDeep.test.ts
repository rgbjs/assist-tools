import { describe, test, expect } from 'vitest'
import { notEmptyDeep } from '../src/main'

describe('notEmptyDeep', () => {
	test('测试通过数据', () => {
		expect(
			notEmptyDeep({
				name: 'test',
				age: 18,
				sex: 1,
				arr: [1, 2],
				obj: {
					a: 1
				}
			})
		).toBe(true)

		expect(
			notEmptyDeep([
				{
					name: 'test',
					age: 18,
					sex: 1,
					arr: [1, 2],
					obj: {
						a: 1
					}
				}
			])
		).toBe(true)

		expect(
			notEmptyDeep({
				age: 0
			})
		).toBe(true)
	})

	test('测试不通过数据', () => {
		expect(
			notEmptyDeep({
				name: '啊',
				age: undefined
			})
		).toBe(false)

		expect(
			notEmptyDeep({
				name: '啊',
				age: ''
			})
		).toBe(false)

		expect(
			notEmptyDeep({
				name: '啊',
				age: null
			})
		).toBe(false)

		expect(
			notEmptyDeep({
				name: '啊',
				age: NaN
			})
		).toBe(false)

		expect(
			notEmptyDeep({
				name: '啊',
				age: Infinity
			})
		).toBe(false)

		expect(
			notEmptyDeep({
				name: '啊',
				age: -Infinity
			})
		).toBe(false)

		expect(
			notEmptyDeep({
				name: '啊',
				age: [
					{
						max: undefined,
						min: 0
					}
				]
			})
		).toBe(false)
	})

	test('测试排除项', () => {
		expect(
			notEmptyDeep(
				{
					name: '啊',
					age: [
						{
							max: undefined,
							min: 0
						}
					]
				},
				['max']
			)
		).toBe(true)
	})
})
