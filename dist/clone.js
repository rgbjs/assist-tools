import isType from './isType';
/**
 * @deprecated 已弃用
 * - 克隆对象或数组的数据
 * @param data 被克隆的对象或数组
 * @param deep 是否深度克隆, 默认为 true [可选]
 * @param func 控制器, 通过传递一个函数来控制克隆的赋值行为, 接收参数: (newData, key, value) => void [可选]
 * @returns 克隆后的结果
 */
const clone = (data, deep = true, 
// @ts-ignore
func = (newData, key, value) => {
    // @ts-ignore
    newData[key] = value;
}) => {
    const type = isType(data);
    if (!(type === 'object' || type === 'array'))
        throw new TypeError('data must be a object or array');
    if (typeof deep !== 'boolean')
        throw new TypeError('"deep" must be a boolean or undefined');
    if (typeof func !== 'function')
        throw new TypeError('"func" must be a function or undefined');
    if (deep === false) {
        const newData = type === 'object' ? {} : [];
        for (let k in data) {
            if (!data.hasOwnProperty(k))
                continue;
            const val = data[k];
            // @ts-ignore
            func(newData, k, val);
        }
        // @ts-ignore
        return newData;
    }
    const map = new WeakMap();
    const deepClone = (data) => {
        const type = isType(data);
        const newData = type === 'object' ? {} : [];
        for (let k in data) {
            if (!data.hasOwnProperty(k))
                continue;
            const val = data[k];
            if (isType(val) === 'object' || isType(val) === 'array') {
                if (map.has(val)) {
                    // @ts-ignore
                    func(newData, k, val);
                }
                else {
                    map.set(val, 1);
                    // @ts-ignore
                    func(newData, k, deepClone(val));
                }
            }
            else {
                // @ts-ignore
                func(newData, k, val);
            }
        }
        return newData;
    };
    // @ts-ignore
    return deepClone(data);
};
export default clone;
