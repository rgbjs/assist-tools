import isType from './isType';
import { cloneDeep } from 'lodash-es';
const sign = Symbol('代理数据:只读');
const cloneSign = Symbol('克隆数据');
const unSign = Symbol('解除只读包装');
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
 * @returns 返回一个只读的代理数据
 */
export const readOnly = (data, options = 'default') => {
    const type = isType(options);
    if (type === 'string') {
        options = {
            mode: options,
            unReadOnly: false,
            repeatReadOnly: false
        };
    }
    else if (type === 'object') {
        if (options.mode === void 0) {
            ;
            options.mode = 'default';
        }
        ;
        options.unReadOnly = !!options.unReadOnly;
        options.repeatReadOnly = !!options.repeatReadOnly;
    }
    else {
        throw new TypeError('"options" must be a string or object');
    }
    // 当遇到数据是已经是一个只读对象时
    if (isReadOnly(data)) {
        if (!options.repeatReadOnly)
            return data;
    }
    return new Proxy(data, {
        get(target, p) {
            if (p === sign)
                return sign;
            if (p === cloneSign)
                return target;
            if (p === unSign) {
                if (options.unReadOnly) {
                    return target;
                }
                else {
                    throw new Error('The current data "options.unReadOnly" is false !');
                }
            }
            const type = isType(target[p]);
            if (type === 'function') {
                if (options.mode === 'default')
                    return readOnly(target[p], options);
                return readOnly(target[p].bind(target), options);
            }
            else if (type === 'object' || type === 'array') {
                return readOnly(target[p], options);
            }
            return target[p];
        },
        set(target) {
            console.warn(target, 'The current data is read-only !');
            return true;
        },
        deleteProperty(target) {
            console.warn(target, 'The current data is read-only !');
            return true;
        },
        apply(target, thisArg, argArray) {
            if (options.mode === 'strict') {
                console.warn(target, '"strict" mode prohibit calling functions !');
                return false;
            }
            if (typeof options.mode === 'function') {
                // 此处已进入类型保护, 已能保证 options.mode 是一个函数
                // @ts-ignore
                if (!options.mode(target, thisArg, argArray)) {
                    return false;
                }
            }
            return target.apply(thisArg, argArray);
        }
    });
};
const quoteData = ['object', 'array', 'function'];
/**
 * 判断一个数据是不是一个只读的代理数据
 * @param target 判断的目标
 */
export const isReadOnly = (target) => {
    const type = isType(target);
    if (!quoteData.includes(type))
        return false;
    if (target[sign] !== sign)
        return false;
    return true;
};
/**
 * 克隆指定的只读数据
 * @param target 需要克隆的只读数据
 * @returns 返回一个新的未包装的新数据
 */
export const cloneReadOnlyData = (target) => {
    const type = isType(target);
    if (!quoteData.includes(type))
        return target;
    const result = target[cloneSign];
    if (isReadOnly(result)) {
        return cloneReadOnlyData(result);
    }
    return cloneDeep(result);
};
/**
 * 解除只读包装
 * @param target 需要解除的只读对象, 必须 readOnly 中配置选项 options.unReadOnly 为 true, 否则将抛出错误
 * @returns 返回原始的未包装的数据
 */
export const unReadOnly = (target) => {
    const type = isType(target);
    if (!quoteData.includes(type))
        return target;
    const result = target[cloneSign];
    if (isReadOnly(result)) {
        return unReadOnly(result);
    }
    return result;
};
