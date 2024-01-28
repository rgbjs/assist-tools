import isEffectiveValue from "./isEffectiveValue.js"
import isTest from "./isTest.js"

interface DataObject {
    [key: string]: any
}

type Data = DataObject | any[] | Function

/**
 * 判断一个对象/数组/函数上的所有属性值中是否都为有效值(浅层判断), ('', null, undefined, NaN, Infinity, -Infinity 被视为无效值)
 * @param data 用于测试的对象
 * @param notTestField 不进行测试的属性, 示例: ['a', 'b'] [可选]
 * @returns 是否都为有效值
 */
const notEmpty = (data: Data, notTestField?: string[]): boolean => {
    return isTest(data, (value) => isEffectiveValue(value), notTestField)
}
 
export default notEmpty