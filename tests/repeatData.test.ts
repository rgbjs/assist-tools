import { describe, test, expect } from 'vitest'
import { repeatData } from '../src/main'

describe('repeatData', () => {
	const symbol = Symbol()
	test('repeatData 复制', () => {
		const obj = {
			a: 1,
			b: 2,
			[symbol]: 3
		}

		const data = repeatData(obj, 2)
		expect(data).toEqual([
			{
				a: 1,
				b: 2,
				[symbol]: 3
			},
			{
				a: 1,
				b: 2,
				[symbol]: 3
			}
		])
	})

	test('repeatData 复制且结果合并为字符串', () => {
		expect(repeatData('?', 3, '')).toBe('???')
		expect(repeatData('?', 3, ' ')).toBe('? ? ?')
		expect(repeatData('?', 3, '-')).toBe('?-?-?')
	})
})
