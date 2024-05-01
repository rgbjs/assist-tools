import isNum from "./isNum";
/**
 * 函数防抖
 * @param 需要防抖的函数
 * @param 防抖时长 , 默认为 200ms [可选]
 * @returns 包装过的防抖函数
 */
const debounce = (callback, delay = 200) => {
    if (typeof callback !== 'function')
        throw new TypeError('"callback" type must be a function !');
    if (!isNum(delay))
        throw new TypeError('"delay" type must be a number and delay value not "NaN" or "Infinity" or "-Infinity" !');
    let timer = undefined;
    return function (...arg) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(this, arg);
        }, delay);
    };
};
export default debounce;
