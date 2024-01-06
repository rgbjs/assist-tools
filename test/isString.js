import { isString } from '../dist/index.js'

console.log(isString(1)) // false

console.log(isString(undefined)) // false

console.log(isString(true)) // false

console.log(isString('1')) // true

// 同时判断多个, 必须所有传入的参数都为有效值才为 true, 有一个为无效值即返回 false
console.log(isString('a', '1', 'null')) // true