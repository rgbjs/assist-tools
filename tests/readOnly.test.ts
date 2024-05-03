import { describe, test, expect } from 'vitest'
import { readOnly, isReadOnly, cloneReadOnlyData, unReadOnly } from '../src/main'

describe('readOnly 与 isReadOnly', () => {
	test('readOnly 与 isReadOnly 测试', () => {
		const obj = {
			name: '哈哈',
			age: 18,
			sex: '1',
			relationship: {
				father: {
					name: 'father',
					age: 45,
					sex: '1'
				}
			}
		}

		const arr = [obj]

		const newObj = readOnly(obj)
		const newArr = readOnly(arr)

		newObj.name = '呵呵'
		expect(newObj).toEqual({
			name: '哈哈',
			age: 18,
			sex: '1',
			relationship: {
				father: {
					name: 'father',
					age: 45,
					sex: '1'
				}
			}
		})

		newArr[0].name = '呵呵'
		expect(newArr).toEqual([
			{
				name: '哈哈',
				age: 18,
				sex: '1',
				relationship: {
					father: {
						name: 'father',
						age: 45,
						sex: '1'
					}
				}
			}
		])

		expect(isReadOnly(newObj)).toBe(true)
		expect(isReadOnly(newArr)).toBe(true)

		expect(isReadOnly({})).toBe(false)
		expect(isReadOnly([])).toBe(false)
	})

	test('readonly strict 模式方法使用 this', () => {
		function setHello() {
			this.hello = 'hello'
		}
		const obj = {
			setHello
		}

		const newObj = readOnly(obj, 'strict')
		newObj.setHello()

		expect(obj).toEqual({
			setHello
		})
	})

	test('readonly default 模式方法使用 this', () => {
		function setHello() {
			this.hello = 'hello'
		}
		const obj = {
			setHello
		}

		const newObj = readOnly(obj, {
			mode: 'default'
		})
		newObj.setHello()

		expect(obj).toEqual({
			setHello
		})
	})

	test('readonly looseFitting 模式方法使用 this', () => {
		function setHello() {
			this.hello = 'hello'
		}
		const obj = {
			setHello
		}

		const newObj = readOnly(obj, 'looseFitting')
		newObj.setHello()

		expect(obj).toEqual({
			hello: 'hello',
			setHello
		})
	})

	test('readonly strict 模式方法不使用 this', () => {
		function setHello() {
			// @ts-ignore
			obj.hello = 'hello'
		}
		const obj = {
			setHello
		}

		const newObj = readOnly(obj, 'strict')
		newObj.setHello()

		expect(obj).toEqual({
			setHello
		})
	})

	test('readonly default 模式方法不使用 this', () => {
		function setHello() {
			// @ts-ignore
			obj.hello = 'hello'
		}
		const obj = {
			setHello
		}

		const newObj = readOnly(obj, 'default')
		newObj.setHello()

		expect(obj).toEqual({
			hello: 'hello',
			setHello
		})
	})

	test('readonly looseFitting 模式方法不使用 this', () => {
		function setHello() {
			// @ts-ignore
			obj.hello = 'hello'
		}
		const obj = {
			setHello
		}

		const newObj = readOnly(obj, 'looseFitting')
		newObj.setHello()

		expect(obj).toEqual({
			hello: 'hello',
			setHello
		})
	})
})

describe('cloneReadOnlyData', () => {
	test('克隆只读数据', () => {
		let o = {
			a: 'a',
			b: 'b'
		}

		const obj = {
			a: 1,
			b: [1, 2, 3],
			c: {
				c1: [1],
				c2: o
			}
		}

		const newObj = readOnly(obj)

		expect(cloneReadOnlyData(newObj)).toEqual({
			a: 1,
			b: [1, 2, 3],
			c: {
				c1: [1],
				c2: o
			}
		})
	})
})

describe('unReadOnly', () => {
	let o = {
		a: 'a',
		b: 'b'
	}

	const obj = {
		a: 1,
		b: [1, 2, 3],
		c: {
			c1: [1],
			c2: o
		}
	}

	test.fails('解除只读包装预估报错', () => {
		const newObj = readOnly(obj)
		expect(unReadOnly(newObj)).toBe(Error)
	})

	test('解除只读包装', () => {
		const newObj = readOnly(obj, { unReadOnly: true })
		expect(unReadOnly(newObj)).toBe(obj)
	})
})
