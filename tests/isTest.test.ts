import { describe, test, expect } from 'vitest'
import { isTest } from '../src/main'

describe('isTest', () => {
	test('测试通过数据', () => {
		const obj = {
			name: undefined,
			sex: '1',
			age: '18'
		}

		expect(
			isTest(
				obj,
				(value, _key, _data) => {
					return typeof value === 'string'
				},
				['name']
			)
		).toBe(true)
	})

	test('测试失败数据', () => {
		const obj = {
			name: undefined,
			sex: '1',
			age: '18'
		}

		expect(
			isTest(obj, (value, _key, _data) => {
				return typeof value === 'string'
			})
		).toBe(false)
	})
})
