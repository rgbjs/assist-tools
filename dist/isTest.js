import isType from "./isType.js";
/**
 * 判断一个对象/数组/函数上的所有属性值是否都通过测试
 * @param data 用于测试的对象
 * @param testFunc 用于测试的函数, 接收三个参数, 分别是 value 和 key 和 data(遍历的对象)
 * @param notTestField 不进行测试的属性, 示例: ['a', 'b'] [可选]
 * @returns 是否通过测试
 */
const isTest = (data, testFunc, notTestField = []) => {
    if (!(isType(data) === 'function' || isType(data) === 'object' || isType(data) === 'array')) {
        throw new TypeError('data must be a "object" or "array" or "function"');
    }
    if (typeof testFunc !== 'function')
        throw new TypeError('testFunc must be a function');
    if (isType(notTestField) !== 'array')
        throw new TypeError('notTestField must be a array');
    for (let k in data) {
        if (!data.hasOwnProperty(k) || notTestField.includes(k))
            continue;
        if (!testFunc(data[k], k, data))
            return false;
    }
    return true;
};
export default isTest;
