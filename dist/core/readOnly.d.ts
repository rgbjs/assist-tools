interface TAnyObj {
    [key: string | number | symbol]: any;
}
type TMode<T> = 'strict' | 'default' | 'looseFitting' | ((target: T, thisArg: any, argArray: any[]) => boolean);
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
export declare const readOnly: <T extends TAnyObj>(data: T, mode?: TMode<T>) => T;
/**
 * 判断一个数据是不是一个只读的代理数据
 * @param target 判断的目标
 */
export declare const isReadOnly: <T extends TAnyObj>(target: T) => boolean;
export {};
