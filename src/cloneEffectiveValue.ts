import clone from "./clone.js"
import isEffectiveValue from "./isEffectiveValue.js"
import isType from "./isType.js"

type Data = object | any[]

/**
 * 获取数组或对象内的所有有效数据, 该方法是深拷贝, ('', null, undefined, NaN, Infinity, -Infinity 被视为无效值), 可通过传递 condition 参数改变行为
 * @param data 需要过滤的数据
 * @param condition 通过传递一个函数来控制克隆行为, 接收参数: (value) => boolean , 返回 true 该值克隆, 返回 false 该值舍去 [可选]
 * @returns 过滤后的数据
 */
const cloneEffectiveValue = <T extends Data>(data: T, condition: (value: unknown) => boolean = isEffectiveValue): T => {
    const type = isType(data)
    if (!(type === 'object' || type === 'array')) throw new TypeError('"data" must be a object or array')
    if (typeof condition !== 'function') throw new TypeError('"condition" must be a object or function')
    const handle = (newData, k, val) => {
        if (condition(val)) {
            let value
            if (isType(val) === 'object' || isType(val) === 'array') {
                value = clone(val, true, handle)
            }
            if (isType(newData) === 'object') {
                newData[k] = value || val
            } else {
                newData.push(value || val)
            }
        }
    }
    return clone(data, true, handle)
}

export default cloneEffectiveValue