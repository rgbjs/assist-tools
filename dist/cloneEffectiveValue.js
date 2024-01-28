import clonedeepwith from '../lib/lodash/clonedeepwith.js';
import isEffectiveValue from "./isEffectiveValue.js";
import isType from "./isType.js";
const createFilter = (condition) => {
    const filter = (value) => {
        if (isType(value) === 'array') {
            return value.filter((item) => {
                const type = isType(item);
                if (type === 'array' || type === 'object') {
                    item = filter(item);
                }
                return condition(item);
            });
        }
        if (isType(value) === 'object') {
            for (const k in value) {
                if (!condition(value[k])) {
                    delete value[k];
                }
            }
        }
    };
    return filter;
};
/**
 * 获取数组或对象内的所有有效数据, 该方法是深拷贝, ('', null, undefined, NaN, Infinity, -Infinity 被视为无效值), 可通过传递 condition 参数改变行为
 * @param data 需要过滤的数据
 * @param condition 通过传递一个函数来控制克隆行为, 接收参数: (value) => boolean , 返回 true 该值克隆, 返回 false 该值舍去 [可选]
 * @returns 过滤后的数据
 */
const cloneEffectiveValue = (data, condition = isEffectiveValue) => {
    return clonedeepwith(data, createFilter(condition));
};
export default cloneEffectiveValue;
