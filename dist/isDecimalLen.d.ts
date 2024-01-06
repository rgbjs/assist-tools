/**
 * 判断数字小数点后小数有效长度是否在指定范围内(有效长度: 末尾 0 将被忽略)
 * @param num 需要判断的数字
 * @param min 最小长度
 * @param max 最大长度
 * @returns
 */
declare const isDecimalLen: (num: number, min: number, max: number) => boolean;
export default isDecimalLen;
