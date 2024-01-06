/**
 * 判断数据是否为数字类型 (判断是否为可读数字应使用 isNum() 或使用标准库方法 Number.isFinite() )
 * @param data 需要判断的数据, 所有传入的参数都通过测试将返回 true, 否则返回 false
 * @returns
 */
const isNumber = (...data) => {
    if (data.length === 0)
        return false;
    return data.every((item) => {
        if (typeof item === 'number')
            return true;
        return false;
    });
};
export default isNumber;
