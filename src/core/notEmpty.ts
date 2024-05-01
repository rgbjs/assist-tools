import isEffectiveValue from './isEffectiveValue'
import isTest from './isTest'

interface DataObject {
	[key: string | number]: any
}

type Data = DataObject | Function

/**
 * 判断一个对象/数组/函数上的所有属性值中是否都为有效值(浅层判断), ('', null, undefined, NaN, Infinity, -Infinity 被视为无效值)
 * @param data 用于测试的对象
 * @param notTestField 不进行测试的属性, 示例: ['a', 'b'] [可选]
 * @returns 是否都为有效值
 */
const notEmpty = <T1 extends Data>(data: T1, notTestField?: (keyof T1)[]): boolean => {
	return isTest(data, (value) => isEffectiveValue(value), notTestField)
}

export default notEmpty
