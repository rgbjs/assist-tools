import { isTest } from '../dist/index.js'

const obj = {
    a: 1,
    b: 2,
    c: 3
}
const objResult = isTest(obj, (value) => {
    return typeof value === 'number'
})
console.log(objResult) // true