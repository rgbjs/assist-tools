/**
 * 判断传入的数据是否为有效的数字或数字字符串
 * - 示例: 123 和 '123'
 * - BigInt 类型被视为 false
 * - '' 和 NaN 和 Infinity 和 -Infinity 被视为无效数字
 * @param str 任意类型
 * @param strict 更加严格的判断 默认为 true [可选]
 * - 字符串不允许首尾存在空白字符(空格, 制表, 换行 等)
 * - 不允许省略的形式的数字字符串, 例如: '.1' 和 '1.' 不被允许, 数字类型忽略该条规则, 因为数字在使用时会自动补全 0
 * - 字符串不允许以无效的多个 0 开头, 例如: 000001 , 数字类型无视该条规则, 因为数字在使用时会自动舍弃无效的 0
 */
declare const isStrNum: (str: unknown, strict?: boolean) => boolean;
export default isStrNum;
