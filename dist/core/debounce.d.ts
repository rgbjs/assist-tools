/**
 * 函数防抖
 * @param 需要防抖的函数
 * @param 防抖时长 , 默认为 200ms [可选]
 * @returns 包装过的防抖函数
 */
declare const debounce: (callback: () => void, delay?: number) => (() => unknown);
export default debounce;
