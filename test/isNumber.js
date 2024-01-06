import { isNumber } from '../dist/index.js'

console.log(isNumber('a')) // false

console.log(isNumber(undefined)) // false

console.log(isNumber(NaN)) // true

console.log(isNumber(Infinity)) // true

console.log(isNumber(-Infinity)) // true

// 同时判断多个, 必须所有传入的参数都为有效值才为 true, 有一个为无效值即返回 false
console.log(isNumber(-1, 2, 3.453, NaN, Infinity, -Infinity)) // true