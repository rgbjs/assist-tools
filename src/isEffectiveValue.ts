/**
 * 判断传入的所有数据是否都为有效值, (null, '', undefined, NaN, Infinity, -Infinity 被视为无效值)
 * @param val 测试的数据
 * @returns
 */
const isEffectiveValue = (...val: any): boolean => {
    if (val.length === 0) return false
    return val.every((value: unknown) => {
        if (
            value === ''
            || value === null
            || value === undefined
            || value === Infinity
            || value === -Infinity
            || Number.isNaN(value)
        ) return false
        return true
    })
}

export default isEffectiveValue