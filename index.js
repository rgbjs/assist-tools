/**
 * @author feiYu
 * @lastModified 2023-10-30
 */

/**
 * @typedef {'number'|'string'|'boolean'|'symbol'|'bigint'|'undefined'|'null'|'object'|'array'} IsType
 */

/** 
 * 判断数据类型
 * @param {*} data 需要判断的数据, 该方法能够区分 null 和 array
 * @returns {IsType} 'number' | 'string' | 'boolean' | 'symbol' | 'bigint' | 'undefined' | 'null' | 'object' | 'array'
 */
export const isType = (data) => {
    if (data === null) return 'null'
    if (Array.isArray(data)) return 'array'
    return typeof data
}

/**
 * 判断数据是否为数字类型 (判断是否为可读数字应使用 isNum )
 * @param {*} data 需要判断的数据, 所有传入的参数都通过测试将返回 true, 否则返回 false
 * @returns {boolean}
 */
export const isNumber = (...data) => {
    if (data.length === 0) return false
    return data.every(item => {
        if (typeof item === 'number') return true
        return false
    })
}

/**
 * 判断数据是否为字符串类型
 * @param {*} data 需要判断的数据, 所有传入的参数都通过测试将返回 true, 否则返回 false
 * @returns {boolean}
 */
export const isString = (...data) => {
    if (data.length === 0) return false
    return data.every(item => {
        if (typeof item === 'string') return true
        return false
    })
}

/**
 * 判断数据是否为可读的数字, 排除 NaN , Infinity , -Infinity
 * @param {*} data 需要判断的数据, 所有传入的参数都通过测试将返回 true, 否则返回 false
 * @returns {boolean}
 */
export const isNum = (...data) => {
    if (data.length === 0) return false
    return data.every(item => {
        if (
            typeof item === 'number'
            && item !== Infinity
            && item !== -Infinity
            && !Number.isNaN(item)
        ) return true
        return false
    })
}

/**
 * - 判断数据是否为整数, 由于语言特性 1.0 这类数字也会被判断为整数
 * @param {*} data 需要判断的数据, 所有传入的参数都通过测试将返回 true, 否则返回 false
 * @returns {boolean}
 */
export const isInt = (...data) => {
    if (data.length === 0) return false
    return data.every(item => {
        if (!isNum(item)) return false
        console.log(item)
        if (String(item).includes('.')) return false
        return true
    })
}

/**
 * 判断数据是否为正整数 (0 不属于正整数) , 由于语言特性 1.0 这类数字也会被判断为整数
 * @param {*} data 需要判断的数据, 所有传入的参数都通过测试将返回 true, 否则返回 false
 * @returns {boolean}
 */
export const isPositiveInt = (...data) => {
    if (data.length === 0) return false
    return data.every(item => {
        if (!isInt(item)) return false
        if (item <= 0) return false
        return true
    })
}

/**
 * 判断数据是否为 id , 即大于 0 的正整数 (该方法内部实现同 isPositiveInt 一致) , 由于语言特性 1.0 这类数字也会被判断为整数
 * @param {*} data 需要判断的数据, 所有传入的参数都通过测试将返回 true, 否则返回 false
 * @returns {boolean}
 */
export const isId = isPositiveInt

/**
 * 判断数字小数点后小数有效长度是否在指定范围内(有效长度: 末尾 0 将被忽略)
 * @param {number} num 需要判断的数字
 * @param {number} min 最小长度
 * @param {number} max 最大长度
 * @returns {boolean}
 */
export const isDecimalLen = (num, min, max) => {
    if (!isNum(num, min, max)) throw new TypeError('num and min and max must be a effective number')
    const numStr = String(num).split('.')[1] || ''
    if (numStr.length >= min && numStr.length <= max) return true
    return false
}

/**
 * 判断数组内所有数字小数点后小数有效长度是否在指定范围内(有效长度: 末尾 0 将被忽略), 该方法内部调用 isDecimalLen
 * @param {array} numArr 需要判断的数字, 数组传递
 * @param {number} min 最小长度
 * @param {number} max 最大长度
 * @returns {boolean}
 */
export const isDecimalLenAll = (numArr, min, max) => {
    if (!Array.isArray(numArr)) throw new TypeError('numArr must be a array')
    if (numArr.length === 0) return false
    return numArr.every(num => isDecimalLen(num, min, max))
}

/**
 * 判断传入的所有数据是否都为有效值, ('', null, undefined, NaN, Infinity, -Infinity 被视为无效值)
 * @param {*} val 测试的数据
 * @returns {boolean}
 */
export const isEffectiveValue = (...val) => {
    if (val.length === 0) return false
    return val.every((value) => {
        if (
            value === ''
            || value === null
            || value === undefined
            || value === Infinity
            || value === -Infinity
            || Number.isNaN(value)
        ) return false
        return true
    })
}

/**
 * 判断一个对象/数组/函数上的所有属性值是否都通过测试
 * @param {object|array|function} data 用于测试的对象
 * @param {function} testFunc 用于测试的函数, 接收三个参数, 分别是 value 和 key 和 data(遍历的对象)
 * @param {array<string>} notTestField 不进行测试的属性, 示例: ['a', 'b'] [可选]
 * @returns {boolean} 是否通过测试
 */
export const isTest = (data, testFunc, notTestField = []) => {
    if (!(isType(data) === 'function' || isType(data) === 'object' || isType(data) === 'array')) {
        throw new TypeError('data must be a object or array or function')
    }
    if (typeof testFunc !== 'function') throw new TypeError('testFunc must be a function')
    if (isType(notTestField) !== 'array') throw new TypeError('notTestField must be a array')
    for (let k in data) {
        if (!data.hasOwnProperty(k) || notTestField.includes(k)) continue
        if (!testFunc(data[k], k, data)) return false
    }
    return true
}

/**
 * 判断一个对象/数组/函数上的所有属性值中是否都为有效值, ('', null, undefined, NaN, Infinity, -Infinity 被视为无效值)
 * @param {object|array|function} data 用于测试的对象
 * @param {array<string> | undefined} notTestField 不进行测试的属性, 示例: ['a', 'b'] [可选]
 * @returns {boolean} 是否都为有效值
 */
export const notEmpty = (data, notTestField) => {
    return isTest(data, (value) => isEffectiveValue(value), notTestField)
}

/**
 * 克隆对象或数组的数据
 * @param {object|array} data 被克隆的对象或数组
 * @param {boolean} [deep] 是否深度克隆, 默认为 true [可选]
 * @param {function:} [func] 通过传递一个函数来控制克隆的赋值行为, 接收参数: (newData, k, val): void [可选]
 * @returns {object|array} 克隆后的结果
 */
export const clone = (data, deep = true, func = (newData, k, val) => { newData[k] = val }) => {
    const type = isType(data)
    if (!(type === 'object' || type === 'array')) throw new TypeError('data must be a object or array')
    if (typeof deep !== 'boolean') throw new TypeError('deep must be a boolean or undefined')
    if (typeof func !== 'function') throw new TypeError('func must be a function or undefined')

    if (deep === false) {
        const newData = type === 'object' ? {} : []
        for (let k in data) {
            if (!data.hasOwnProperty(k)) continue
            const val = data[k]
            func(newData, k, val)
        }
        return newData
    }

    const map = new WeakMap()
    const deepClone = (data) => {
        const type = isType(data)
        const newData = type === 'object' ? {} : []
        for (let k in data) {
            if (!data.hasOwnProperty(k)) continue
            const val = data[k]
            if (isType(val) === 'object' || isType(val) === 'array') {
                if (map.has(val)) {
                    func(newData, k, val)
                } else {
                    map.set(val, 1)
                    func(newData, k, deepClone(val))
                }
            } else {
                func(newData, k, val)
            }
        }
        return newData
    }
    return deepClone(data)
}

/**
 * 获取数组或对象内的所有有效数据, 该方法是深拷贝, ('', null, undefined, NaN, Infinity, -Infinity 被视为无效值), 可通过传递 condition 参数改变行为
 * @param {object|array} data 需要过滤的数据
 * @param {function} condition 通过传递一个函数来控制克隆行为, 接收参数: (val): boolean , 返回 true 该值克隆, 返回 false 该值舍去 [可选]
 * @returns {object|array} 过滤后的数据
 */
export const cloneEffectiveValue = (data, condition = isEffectiveValue) => {
    const type = isType(data)
    if (!(type === 'object' || type === 'array')) throw new TypeError('data must be a object or array')
    if (typeof condition !== 'function') throw new TypeError('condition must be a object or function')
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

/**
 * 函数防抖
 * @param {function} callback 需要防抖的函数
 * @param {number} [delay] 防抖时长 , 默认为 200ms [可选]
 * @returns {function} 包装过的防抖函数
 */
export const debounce = (callback, delay = 200) => {
    if (typeof callback !== 'function') throw new TypeError("'callback' type must be a function !")
    if (!isNum(delay)) throw new TypeError("'delay' type must be a number and 'delay' value not 'NaN' or 'Infinity' or '-Infinity' !")

    let timer = null
    return function (...arg) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback.apply(this, arg)
        }, delay)
    }
}

/** 长度不为 2 , 则前方补充 0 */
const _completion = (content) => {
    const str = String(content)
    if (str.length < 2) return 0 + str
    return str
}

/**
 * 将时间戳/时间对象转为一个可读时间
 * @param {number|Date} timer 一个时间戳
 * @returns {String} 示例: 2023-10-30 22:23:00
 */
export const convertTimer = (timer) => {
    if (!((timer instanceof Date) || typeof timer === 'number')) {
        throw new TypeError('timer must be a number or a Date object')
    }
    let date = timer
    if (typeof timer === 'number') {
        date = new Date(+timer)
    }
    return `${date.getFullYear()}-${_completion(date.getMonth() + 1)}-${_completion(date.getDate())} ${_completion(date.getHours())}:${_completion(date.getMinutes())}:${_completion(date.getSeconds())}`
}
