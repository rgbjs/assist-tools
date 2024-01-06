import { isDecimalLen } from '../dist/index.js'

// 有效小数位最少0位, 最多2位
const num1 = 1.200000
const result1 = isDecimalLen(num1, 0, 2)
console.log(result1) // true

// 有效小数位最少0位, 最多2位
const num2 = 1.20038
const result2 = isDecimalLen(num2, 0, 2)
console.log(result2) // false