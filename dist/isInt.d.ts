/**
 * 判断数据是否为整数, 由于语言特性 1.0 这类数字也会被判断为整数, 内部调用标准库 Number.isInteger() 方法
 * - 若需同时判断多个可使用该方法, 若判断单个 Number.isInteger() 方法和该方法一致
 * @param data 需要判断的数据, 所有传入的参数都通过测试将返回 true, 否则返回 false
 * @returns
 */
declare const isInt: (...data: any) => boolean;
export default isInt;
