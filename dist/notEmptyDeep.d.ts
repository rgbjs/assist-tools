interface Data {
    [k: string | number | symbol]: any;
}
/**
 * 深度判断一个对象/数组上的所有属性值中是否都为有效值, ('', null, undefined, NaN, Infinity, -Infinity 被视为无效值)
 * @param data 用于测试的数据
 * @param notTestField 不进行测试的属性, 示例: ['a', 'b'] [可选]
 * @returns 是否都为有效值
 */
declare const notEmptyDeep: (data: Data, notTestField?: string[]) => boolean;
export default notEmptyDeep;