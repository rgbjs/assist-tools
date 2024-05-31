import isType from './isType'
import { cloneDeep } from 'lodash-es'
export interface TAnyObj {
	[key: string | number | symbol]: any
}

export type TMode<T> = 'strict' | 'default' | 'looseFitting' | ((target: T, thisArg: any, argArray: any[]) => boolean)

export interface TOptions<T> {
	/**
	 * 模式 , 默认为 default [可选]
	 * - strict 严格模式, 禁止函数调用(防止产生副作用)
	 * - default 默认模式, 允许函数调用, 但禁止内部通过 this 来修改数据
	 * - looseFitting 开放模式, 允许函数调用, 允许所有副作用产生
	 * - 自定义模式 传递一个函数, 接收参数 target: 目标函数 thisArg: 绑定的this argArray: 传递的参数列表,
	 */
	mode?: TMode<T>
	/**
	 * 是否允许 unReadOnly 解包, 默认为 false
	 */
	unReadOnly?: boolean
	/**
	 * 是否允许重复包装为只读对象, 即当 readOnly 遇到的数据已经是一个只读数据了, 是否允许再包装多层, true 允许, false 不允许, 直接返回已包装对象, 默认为 false
	 */
	repeatReadOnly?: boolean
	/**
	 * 代理标识, 只有标识一致才可使用 unReadOnly()
	 */
	sign?: any
}

const dataSign = Symbol('只读代理标识')
const readOnlySign = Symbol('代理数据:只读')
const unReadOnlySign = Symbol('解除只读代理包装')
const cloneSign = Symbol('克隆数据只读代理数据')

/**
 * 将一个引用数据类型包装为只读数据
 * @param data 原始数据
 * @param options 配置选项
 * - 可直接传递 'strict' | 'default' | 'looseFitting' 简写形式(简写 mode)
 * - **options.mode** 模式 , 默认为 default [可选]
 * - strict 严格模式, 禁止函数调用(防止产生副作用)
 * - default 默认模式, 允许函数调用, 但禁止内部通过 this 来修改数据
 * - looseFitting 开放模式, 允许函数调用, 允许所有副作用产生
 * - 自定义模式 传递一个函数, 接收参数 target: 目标函数 thisArg: 绑定的this argArray: 传递的参数列表,
 * 返回 true / false 来决定是否允许调用
 * - **options.unReadOnly** 是否允许 unReadOnly 解包, 默认为 false
 * - **options.repeatReadOnly** 是否允许重复包装为只读对象, 即当 readOnly 遇到的数据已经是一个只读数据了, 是否允许再包装多层, true 允许, false 不允许, 直接返回已包装对象, 默认为 false
 * - **options.sign** 代理标识, 只有标识一致才可使用 unReadOnly() [可选]
 * @returns 返回一个只读的代理数据
 */
export const readOnly = <T extends TAnyObj>(data: T, options: TOptions<T> | TMode<T> = 'default'): T => {
	let config: TOptions<T> = {}
	const type = isType(options)
	if (type === 'string') {
		verifyMode(options as TMode<T>)
		config = {
			mode: options as TMode<T>,
			unReadOnly: false,
			repeatReadOnly: false
		}
	} else if (type === 'object') {
		let mode = (options as TOptions<T>).mode
		if (mode === void 0) {
			mode = 'default'
		}
		verifyMode(mode)
		config.mode = mode
		config.unReadOnly = !!(options as TOptions<T>).unReadOnly
		config.repeatReadOnly = !!(options as TOptions<T>).repeatReadOnly
		config.sign = (options as TOptions<T>).sign
	} else {
		throw new TypeError('"options" must be a string or object')
	}

	// 当遇到数据是已经是一个只读对象时
	if (isReadOnly(data)) {
		if (!config.repeatReadOnly) return data
	}

	return new Proxy(data, {
		get(target: T, p: keyof T) {
			/**
			 * 验证只读代理操作
			 */
			if (p === readOnlySign) return readOnlySign
			/**
			 * 验证代理标识操作
			 */
			if (p === dataSign) return config.sign
			/**
			 * 验证克隆数据操作
			 */
			if (p === cloneSign) return target
			/**
			 * 验证解包操作
			 */
			if (p === unReadOnlySign) {
				if (config.unReadOnly) {
					return target
				} else {
					throw new Error('The current data "options.unReadOnly" is false !')
				}
			}

			const type = isType(target[p])
			if (type === 'function') {
				if (config.mode === 'default') return readOnly(target[p].bind(errorProxy), options)
				return readOnly(target[p].bind(target), options)
			} else if (type === 'object' || type === 'array') {
				return readOnly(target[p], options)
			}

			return target[p]
		},

		set(target) {
			console.warn(target, 'The current data is read-only !')
			return true
		},

		deleteProperty(target) {
			console.warn(target, 'The current data is read-only !')
			return true
		},

		apply(target, thisArg, argArray) {
			if (config.mode === 'strict') {
				console.warn(
					target,
					'The current data configuration "options.mode" is "strict" , "strict" mode prohibit calling functions !'
				)
				return false
			}

			if (typeof config.mode === 'function') {
				if (!config.mode(target, thisArg, argArray)) {
					return false
				}
			}

			return target.apply(thisArg, argArray)
		}
	})
}

/**
 * 验证 mode 是否正确
 */
const verifyMode = (mode: 'strict' | 'default' | 'looseFitting' | Function) => {
	const type = isType(mode)
	const err = new TypeError('"options.mode" must be a "strict" | "default" | "looseFitting" | function !')
	if (type === 'string') {
		if (!['strict', 'default', 'looseFitting'].includes(mode as string)) {
			throw err
		}
		return
	}

	if (type !== 'function') {
		throw err
	}
}

/**
 * 拦截 default 模式下方法 this 操作
 */
const errorProxy = new Proxy(
	{},
	{
		set<T>(_target: T, p: keyof T) {
			console.warn(
				p,
				'The current data configuration "options.mode" is "default" , cannot be changed data through "this" !'
			)
			return true
		}
	}
)

const quoteData = ['object', 'array', 'function']

/**
 * 判断一个数据是不是一个只读的代理数据
 * @param target 判断的目标
 */
export const isReadOnly = <T extends TAnyObj>(target: T) => {
	const type = isType(target)
	if (!quoteData.includes(type)) return false
	if (target[readOnlySign] !== readOnlySign) return false
	return true
}

/**
 * 判断一个代理数据标识是否相等
 * @param target 判断的目标
 * @param sign 判断的目标代理标识
 */
export const checkReadOnlySign = <T extends TAnyObj>(target: T, sign: any): boolean => {
	if (isReadOnly(target) === false) return false
	return Object.is(target[dataSign], sign)
}

/**
 * 克隆指定的数据
 * @param target 需要克隆的数据
 * @returns 返回一个新的数据
 */
export const cloneReadOnlyData = <T>(target: T): T => {
	return cloneDeep(target)
}

/**
 * 解除只读包装
 * @param target 需要解除的只读对象, 必须 readOnly 中配置选项 options.unReadOnly 为 true, 否则将抛出错误
 * @param sign 代理标识, 必须同 readOnly 中配置选项 options.sign 一致, 否则将抛出错误
 * @returns 返回原始的未包装的数据
 */
export const unReadOnly = <T extends TAnyObj>(target: T, sign?: any): T => {
	const type = isType(target)
	if (!quoteData.includes(type)) return target
	if (!checkReadOnlySign(target, sign)) {
		console.warn(target, 'The current data "sign" is inconsistent !')
		throw new TypeError('The current data "sign" is inconsistent !')
	}
	const result: T = target[unReadOnlySign]
	if (isReadOnly(result)) {
		return unReadOnly(result, sign)
	}
	return result
}
