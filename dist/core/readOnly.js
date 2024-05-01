import isType from './isType';
const sign = Symbol('代理数据:只读');
/**
 * 将一个引用数据类型包装为只读数据
 * @param data 原始数据
 * @param mode 模式 , 默认为 default [可选]
 * - strict 严格模式, 禁止函数调用(防止产生副作用)
 * - default 默认模式, 允许函数调用, 但禁止内部通过 this 来修改数据
 * - looseFitting 开放模式, 允许函数调用, 允许所有副作用产生
 * - 自定义模式 传递一个函数, 接收参数 target: 目标函数 thisArg: 绑定的this argArray: 传递的参数列表
 * @returns 返回一个只读的代理数据
 */
export const readOnly = (data, mode = 'default') => {
    return new Proxy(data, {
        get(target, p) {
            if (p === sign) {
                return sign;
            }
            const type = isType(target[p]);
            if (type === 'function') {
                if (mode === 'default')
                    return readOnly(target[p], mode);
                return readOnly(target[p].bind(target), mode);
            }
            else if (type === 'object' || type === 'array') {
                return readOnly(target[p], mode);
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
            if (mode === 'strict') {
                console.warn(target, '"strict" mode prohibit calling functions !');
                return false;
            }
            if (typeof mode === 'function') {
                if (!mode(target, thisArg, argArray)) {
                    return false;
                }
            }
            return target.apply(thisArg, argArray);
        }
    });
};
/**
 * 判断一个数据是不是一个只读的代理数据
 * @param target 判断的目标
 */
export const isReadOnly = (target) => {
    const type = isType(target);
    if (!['object', 'array', 'function'].includes(type))
        return false;
    if (target[sign] !== sign)
        return false;
    return true;
};
