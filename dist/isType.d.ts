type Type = 'number' | 'string' | 'boolean' | 'symbol' | 'bigint' | 'undefined' | 'null' | 'object' | 'array' | 'function';
/**
 * 判断数据类型
 * @param data 需要判断的数据, 该方法能够区分 null 和 array
 * @returns 'number' | 'string' | 'boolean' | 'symbol' | 'bigint' | 'undefined' | 'null' | 'object' | 'array' | 'function'
 */
declare const isType: (data: any) => Type;
export default isType;
