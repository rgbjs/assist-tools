/**
 * 判断数据是否为字符串类型
 * @param data 需要判断的数据, 所有传入的参数都通过测试将返回 true, 否则返回 false
 * @returns
 */
const isString = (...data) => {
    if (data.length === 0)
        return false;
    return data.every((item) => {
        if (typeof item === 'string')
            return true;
        return false;
    });
};
export default isString;
