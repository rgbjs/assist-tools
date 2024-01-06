import { isType } from '../dist/index.js'

console.log(isType(1)) // number
console.log(isType('a')) // string
console.log(isType(true)) // boolean
console.log(isType(undefined)) // undefined
console.log(isType(null)) // null
console.log(isType(BigInt(1))) // bigint
console.log(isType(Symbol())) // symbol
console.log(isType(() => { })) // function
console.log(isType([])) // array
console.log(isType({})) // object
