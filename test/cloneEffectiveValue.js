import { cloneEffectiveValue } from '../dist/index.js'

const obj = {
    num: 1,
    str: '123',
    bool: true,
    bigInt: BigInt(123),
    undefined: undefined,
    null: null,
    arr: [
        1,
        '123',
        true,
        BigInt(123),
        undefined,
        null,
        {
            num: 1,
            str: '123',
            bool: true,
            bigInt: BigInt(123),
            undefined: undefined,
            null: null,
        }
    ],
    obj: {
        num: 1,
        str: '123',
        bool: true,
        bool2: false,
        bigInt: BigInt(123),
        undefined: undefined,
        null: null,
        arr: [
            1,
            '123',
            true,
            BigInt(123),
            undefined,
            null,
        ]
    }
}

const objData = cloneEffectiveValue(obj)
console.log('去除所有无效值 => ', objData)
