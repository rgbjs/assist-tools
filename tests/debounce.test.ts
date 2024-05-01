import { describe, test, expect } from 'vitest'
import { debounce } from '../src/main'

describe('debounce', () => {
	let f1: Function
	const p1 = new Promise((resolve, reject) => {
		f1 = debounce(() => {
			resolve(300)
		}, 300)
	})

	test('防抖默认值 300 毫秒', async () => {
		f1()
		f1()
		f1()
		const result = await p1
		expect(result).toBe(300)
	})

	let f2: Function
	const p2 = new Promise((resolve, reject) => {
		f2 = debounce(() => {
			resolve(500)
		}, 500)
	})

	test('防抖传值 500 毫秒', async () => {
		f2()
		f2()
		f2()
		const result = await p2
		expect(result).toBe(500)
	})
})
