import isType from './isType'

interface AnyObj {
	[key: string | number]: any
}

type Data = AnyObj | Function

interface TestFunc<T1, T2> {
	(value: T1[keyof T1], key: Exclude<keyof T1, T2>, data: T1): boolean
}

/**
 * 判断一个对象/数组/函数上的所有属性值是否都通过测试(浅层判断) , 不遍历 key 值为 symbol 的数据 
 * @param data 用于测试的对象
 * @param testFunc 用于测试的函数, 接收三个参数, 分别是 value 和 key 和 data(遍历的对象)
 * @param notTestField 不进行测试的属性, 示例: ['a', 'b'] [可选]
 * @returns 是否通过测试
 */
const isTest = <T1 extends Data, T2 extends T1>(
	data: T1,
	testFunc: TestFunc<T1, T2>,
	notTestField: (keyof T2)[] = []
): boolean => {
	const type = isType(data)
	if (!(type === 'function' || type === 'object' || type === 'array')) {
		throw new TypeError('"data" must be a `object` or `array` or `function`')
	}
	if (typeof testFunc !== 'function') throw new TypeError('"testFunc" must be a `function`')
	if (isType(notTestField) !== 'array') throw new TypeError('"notTestField" must be a `array`')
	for (let k in data) {
		if (!Object.prototype.hasOwnProperty.call(data, k) || notTestField.includes(k as unknown as keyof T2)) continue
		if (!testFunc(data[k as unknown as Exclude<keyof T1, keyof T2>], k as unknown as Exclude<keyof T1, T2>, data))
			return false
	}
	return true
}

export default isTest
