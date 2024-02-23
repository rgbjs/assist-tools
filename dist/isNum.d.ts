/**
 * 判断数据是否为可读的数字, 排除 NaN , Infinity , -Infinity, 内部调用标准库 Number.isFinite() 方法
 * - 若需同时判断多个可使用该方法, 若判断单个 Number.isFinite() 方法和该方法一致
 * @param data 需要判断的数据, 所有传入的参数都通过测试将返回 true, 否则返回 false
 * @returns
 */
declare const isNum: (...data: any) => boolean;
export default isNum;
