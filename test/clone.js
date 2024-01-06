import { clone, isType } from '../dist/index.js'

const person = {
    name: '父亲',
    age: 40,
    gender: '男',
    children: [
        {
            name: '老大',
            age: 20,
            gender: '男',
        },
        {
            name: '老二',
            age: 19,
            gender: '女',
        }
    ]
}

// 浅层克隆
// const shallowClone = clone(person, false)
// console.log('浅层克隆结果 => ', shallowClone.children === person.children) // false 浅层克隆, 引用值的地址为同一个


// 深层克隆
// const deepClone = clone(person)
// console.log(deepClone)
// console.log('深层克隆结果 => ', deepClone.children === person.children) // true


// 操控克隆过程
// const controlClone = clone(person, true, (newData, key, value) => {
//     if (isType(value) === 'object' && value.name === '老大') return
//     if (isType(newData) === 'array') {
//         newData.push(value)
//     } else {
//         newData[key] = value
//     }
// })

// console.log('操控克隆过程结果 => ', controlClone) // 排除了 "老大"


const arr = [
    {
        a: 1,
        b: 2
    },
    3,
    4
]

// 浅层克隆数组
// const cloneArr = clone(arr, false)
// console.log('浅层克隆数组结果 => ', cloneArr[0] === arr[0]) // true


// 深层克隆数组
// const deepCloneArr = clone(arr)
// console.log(deepCloneArr)
// console.log('深层克隆数组结果 => ', deepCloneArr[0] === arr[0]) // false