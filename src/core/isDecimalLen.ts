import isNum from './isNum'

/**
 * 判断数字小数点后小数有效长度是否在指定范围内(有效长度: 末尾 0 将被忽略)
 * @param num 需要判断的数字
 * @param min 最小长度
 * @param max 最大长度
 * @returns
 */
const isDecimalLen = (num: number, min: number, max: number): boolean => {
	if (!isNum(min, max)) throw new TypeError('"min" and "max" must be a effective number')

	if (Number.isNaN(num)) return false
	if (num !== Infinity && num !== -Infinity && !isNum(num)) return false

	const numStr = String(num).split('.')[1] || ''
	if (numStr.length >= min && numStr.length <= max) return true
	return false
}

export default isDecimalLen
