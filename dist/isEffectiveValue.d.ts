/**
 * 判断传入的所有数据是否都为有效值, (null, '', undefined, NaN, Infinity, -Infinity 被视为无效值)
 * @param val 测试的数据
 * @returns
 */
declare const isEffectiveValue: (...val: any) => boolean;
export default isEffectiveValue;
