import { isStrNum } from '../dist/index.js'

console.log(isStrNum(1))
console.log(isStrNum(1.000000000000000))
console.log(isStrNum(1.))
console.log(isStrNum(.1))
console.log(isStrNum('1'))
console.log(isStrNum(1.1))
console.log(isStrNum('1.1'))
console.log(isStrNum('1.0'))
console.log(isStrNum('0.0'))
console.log(isStrNum('0.1'))
console.log(isStrNum('1.00'))

console.log('--------------------')

console.log(isStrNum('00'))
console.log(isStrNum('.0'))
console.log(isStrNum('0.'))
console.log(isStrNum('1.'))
console.log(isStrNum('.1'))
console.log(isStrNum(''))
console.log(isStrNum(' '))
console.log(isStrNum('.'))
console.log(isStrNum('1.1.'))
console.log(isStrNum('1.1.1'))

console.log('--------------------')

console.log(isStrNum(Infinity))
console.log(isStrNum(-Infinity))
console.log(isStrNum(NaN))
console.log(isStrNum(true))
console.log(isStrNum(false))
console.log(isStrNum('abc'))
console.log(isStrNum(null))
console.log(isStrNum())
console.log(isStrNum(undefined))
console.log(isStrNum(BigInt(1)))
