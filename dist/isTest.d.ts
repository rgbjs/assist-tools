interface DataObject {
    [key: string]: any;
}
type Data = DataObject | any[] | Function;
interface TestFunc {
    (value: any, key: string, data: Data): boolean;
}
/**
 * 判断一个对象/数组/函数上的所有属性值是否都通过测试(浅层判断)
 * @param data 用于测试的对象
 * @param testFunc 用于测试的函数, 接收三个参数, 分别是 value 和 key 和 data(遍历的对象)
 * @param notTestField 不进行测试的属性, 示例: ['a', 'b'] [可选]
 * @returns 是否通过测试
 */
declare const isTest: (data: Data, testFunc: TestFunc, notTestField?: string[]) => boolean;
export default isTest;
