/**
 * 判断数据是否为数字类型 , 仅判断 typeof 是否为 number (判断是否为可读数字应使用 isNum() 或使用标准库方法 Number.isFinite() )
 * @param data 需要判断的数据, 所有传入的参数都通过测试将返回 true, 否则返回 false
 * @returns
 */
declare const isNumber: (...data: any) => boolean;
export default isNumber;
