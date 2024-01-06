import isPositiveInt from './isPositiveInt.js';
/**
 * 判断数据是否为 id , 即大于 0 的正整数 (该方法是 isPositiveInt 的别名) , 由于语言特性 1.0 这类数字也会被判断为整数
 * @param data 需要判断的数据, 所有传入的参数都通过测试将返回 true, 否则返回 false
 * @returns
 */
const isId = isPositiveInt;
export default isId;
