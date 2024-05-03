interface TAnyObj {
    [key: string | number | symbol]: any;
}
type TMode<T> = 'strict' | 'default' | 'looseFitting' | ((target: T, thisArg: any, argArray: any[]) => boolean);
interface TOptions<T> {
    /**
     * 模式 , 默认为 default [可选]
     * - strict 严格模式, 禁止函数调用(防止产生副作用)
     * - default 默认模式, 允许函数调用, 但禁止内部通过 this 来修改数据
     * - looseFitting 开放模式, 允许函数调用, 允许所有副作用产生
     * - 自定义模式 传递一个函数, 接收参数 target: 目标函数 thisArg: 绑定的this argArray: 传递的参数列表,
     */
    mode?: TMode<T>;
    /**
     * 是否允许 unReadOnly 解包, 默认为 false
     */
    unReadOnly?: boolean;
    /**
     * 是否允许重复包装为只读对象, 即当 readOnly 遇到的数据已经是一个只读数据了, 是否允许再包装多层, true 允许, false 不允许, 直接返回已包装对象, 默认为 false
     */
    repeatReadOnly?: boolean;
}
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
export declare const readOnly: <T extends TAnyObj>(data: T, options?: TOptions<T> | TMode<T>) => T;
/**
 * 判断一个数据是不是一个只读的代理数据
 * @param target 判断的目标
 */
export declare const isReadOnly: <T extends TAnyObj>(target: T) => boolean;
/**
 * 克隆指定的只读数据
 * @param target 需要克隆的只读数据
 * @returns 返回一个新的未包装的新数据
 */
export declare const cloneReadOnlyData: <T extends TAnyObj>(target: T) => T;
/**
 * 解除只读包装
 * @param target 需要解除的只读对象, 必须 readOnly 中配置选项 options.unReadOnly 为 true, 否则将抛出错误
 * @returns 返回原始的未包装的数据
 */
export declare const unReadOnly: <T extends TAnyObj>(target: T) => T;
export {};
