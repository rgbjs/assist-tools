import { isNum } from '../dist/index.js'

const nan = NaN
console.log((isNum(nan))) // false

const infinity = Infinity
console.log(isNum(infinity)) // false

const negativeInfinity = -Infinity
console.log(isNum(negativeInfinity)) // false

const negative = -1.1
console.log(isNum(negative)) // true

const zero = 0
console.log(isNum(zero)) // true

const float = 1.1
console.log(isNum(float)) // true

const int = 1
console.log(isNum(int)) // true

// 同时判断多个, 必须所有传入的参数都为有效值才为 true, 有一个为无效值即返回 false
console.log(isNum(-1, 2, -3453, 34534, 3.453, 2)) // true