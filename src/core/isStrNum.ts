import isNum from './isNum'

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
const isStrNum = (str: unknown, strict: boolean = true): boolean => {
	const type = typeof str
	if (!(type === 'number' || type === 'string')) return false

	// 为数字
	if (type === 'number') {
		return isNum(str)
	}

	if ((str as string).trim() === '') return false

	// 为字符串, 且开启严格模式
	if (strict) {
		const reg1 = /\s/g
		if (reg1.test(str as string)) return false

		if ((str as string).includes('.')) {
			const start = (str as string).substring(0, 2)
			if (start === '00') return false

			const reg2 = /[0-9]\.[0-9]/
			if (!reg2.test(str as string)) return false
		} else {
			if ((str as string).length > 1) {
				const start = (str as string)[0]
				if (start === '0') return false
			}
		}
	}

	// 普通模式
	return isNum(Number(str))
}

export default isStrNum
