import { isPositiveInt } from '../dist/index.js'

const str = '1'
console.log(isPositiveInt(str)) // false

const zero = 0
console.log(isPositiveInt(zero)) // false

const float = 1.1
console.log(isPositiveInt(float)) // false

const int = 1
console.log(isPositiveInt(int)) // true

// 同时判断多个, 必须所有传入的参数都为有效值才为 true, 有一个为无效值即返回 false
console.log(isPositiveInt(1, 2, 3453, 34534, 3453, 2)) // true