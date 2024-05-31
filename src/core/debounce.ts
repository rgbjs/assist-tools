import isNum from './isNum'

/**
 * 函数防抖
 * @param 需要防抖的函数
 * @param 防抖时长 , 默认为 200ms [可选]
 * @returns 包装过的防抖函数
 */
const debounce = (callback: () => void, delay = 200): (() => unknown) => {
	if (typeof callback !== 'function') throw new TypeError('"callback" type must be a function !')
	if (!isNum(delay))
		throw new TypeError('"delay" type must be a number and delay value not "NaN" or "Infinity" or "-Infinity" !')

	let timer: number | undefined = undefined
	return function (this: any, ...arg) {
		clearTimeout(timer)
		timer = setTimeout(() => {
			callback.apply(this, arg)
		}, delay) as unknown as number
	}
}

export default debounce
