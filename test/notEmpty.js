import { notEmpty } from '../dist/index.js'

const obj = {
    a: 1,
    b: 2,
    c: undefined
}

console.log(notEmpty(obj)) // false
console.log(notEmpty(obj, ['c'])) // true