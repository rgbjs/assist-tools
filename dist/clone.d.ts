type CloneFunc<T> = (newData: T, key: string | number, value: any) => void;
interface DataObject {
    [key: string]: any;
}
type Data = DataObject | any[];
/**
 * 克隆对象或数组的数据
 * @param data 被克隆的对象或数组
 * @param deep 是否深度克隆, 默认为 true [可选]
 * @param func 控制器, 通过传递一个函数来控制克隆的赋值行为, 接收参数: (newData, key, value) => void [可选]
 * @returns 克隆后的结果
 */
declare const clone: <T extends Data>(data: T, deep?: boolean, func?: CloneFunc<T>) => T;
export default clone;
