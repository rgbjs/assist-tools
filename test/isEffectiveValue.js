import { isEffectiveValue } from '../dist/index.js'

const emptyStr = ''
console.log(isEffectiveValue(emptyStr)) // false 空串为无效值

const un = undefined
console.log(isEffectiveValue(un)) // false undefined 为无效值

const nu = null
console.log(isEffectiveValue(nu)) // false null 为无效值

const nan = NaN
console.log(isEffectiveValue(nan)) // false NaN 为无效值

const infinity = Infinity
console.log(isEffectiveValue(infinity)) // false Infinity 为无效值

const negativeInfinity = -Infinity
console.log(isEffectiveValue(negativeInfinity)) // false -Infinity 为无效值

const zero = 0
console.log(isEffectiveValue(zero)) // true 0 为有效值

// 同时判断多个, 必须所有传入的参数都为有效值才为 true, 有一个为无效值即返回 false
console.log(isEffectiveValue(1, 2, 'a', {}, [])) // true