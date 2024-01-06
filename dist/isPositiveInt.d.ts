/**
 * 判断数据是否为正整数 (0 不属于正整数) , 由于语言特性 1.0 这类数字也会被判断为整数
 * @param data 需要判断的数据, 所有传入的参数都通过测试将返回 true, 否则返回 false
 * @returns
 */
declare const isPositiveInt: (...data: any) => boolean;
export default isPositiveInt;
