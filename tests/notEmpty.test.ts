import { describe, test, expect } from 'vitest'
import { notEmpty } from '../src/main'

describe('notEmpty', () => {
	test('测试通过数据', () => {
		expect(
			notEmpty({
				name: 'test',
				age: 18,
				sex: 1,
				arr: [],
				obj: {
					a: 1
				}
			})
		).toBe(true)

		expect(
			notEmpty([
				{
					name: 'test',
					age: 18,
					sex: 1,
					arr: [],
					obj: {
						a: 1
					}
				}
			])
		).toBe(true)

		expect(
			notEmpty({
				age: 0
			})
		).toBe(true)
	})

	test('测试不通过数据', () => {
		expect(
			notEmpty({
				name: '啊',
				age: undefined
			})
		).toBe(false)

		expect(
			notEmpty({
				name: '啊',
				age: ''
			})
		).toBe(false)

		expect(
			notEmpty({
				name: '啊',
				age: null
			})
		).toBe(false)

		expect(
			notEmpty({
				name: '啊',
				age: NaN
			})
		).toBe(false)

		expect(
			notEmpty({
				name: '啊',
				age: Infinity
			})
		).toBe(false)

		expect(
			notEmpty({
				name: '啊',
				age: -Infinity
			})
		).toBe(false)
	})

	test('测试排除项', () => {
		expect(
			notEmpty(
				{
					name: '啊',
					age: -Infinity
				},
				['age']
			)
		).toBe(true)
	})
})
