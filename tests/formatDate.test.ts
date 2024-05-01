import { describe, test, expect } from 'vitest'
import { formatDate } from '../src/main'

describe('formatDate', () => {
	const date = new Date('2024-04-27 00:00:00')

	test('时间对象转换', () => {
		expect(formatDate(date)).toBe('2024-04-27 00:00:00')
	})

	test('时间戳转换', () => {
		expect(formatDate(date.getTime(), 'YYYY/MM/DD hh:mm:ss')).toBe('2024/04/27 00:00:00')
	})

	test('时间格式转换', () => {
		expect(formatDate('2024-04-27 00:00:00', 'YYYY/MM/DD hh:mm:ss')).toBe('2024/04/27 00:00:00')
	})
})
