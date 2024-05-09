export { default as cloneEffectiveValue } from './core/cloneEffectiveValue';
export { default as debounce } from './core/debounce';
export { default as formatDate } from './core/formatDate';
export { default as isDecimalLen } from './core/isDecimalLen';
export { default as isEffectiveValue } from './core/isEffectiveValue';
export { default as isId } from './core/isId';
export { default as isInt } from './core/isInt';
export { default as isNum } from './core/isNum';
export { default as isNumber } from './core/isNumber';
export { default as isPositiveInt } from './core/isPositiveInt';
export { default as isString } from './core/isString';
export { default as isTest } from './core/isTest';
export { default as isType } from './core/isType';
export { default as notEmpty } from './core/notEmpty';
export { default as isStrNum } from './core/isStrNum';
export { default as notEmptyDeep } from './core/notEmptyDeep';
export { readOnly, isReadOnly, cloneReadOnlyData, unReadOnly } from './core/readOnly';
// export * as ReadOnly from './core/readOnly' 低版本 webpack 无法支持
// 兼容处理
import * as _ReadOnly from './core/readOnly';
export const ReadOnly = _ReadOnly;
