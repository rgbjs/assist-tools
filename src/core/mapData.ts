type AnyObject = {
	[key: string | number | symbol]: any
}

type MapFunc<T> = {
	[k in keyof T]?: (value: T[k], key: k, target: T) => any
}

type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : any

/**
 * 对象映射关系处理
 * @param target 目标对象(不获取原型上的数据)
 * @param mapFunc 映射处理对象
 * @param update 是否直接更新 target 对象, 如果为 true 则直接更新 target 对象, 如果为 false 则返回一个新的对象, 默认为 false [可选]
 * @returns 映射后的对象
 */
export default <T1 extends AnyObject, T2 extends MapFunc<T1>>(
	target: T1,
	mapFunc: T2,
	update?: boolean
): { [k in keyof T2]: GetReturnType<T2[k]> } => {
	const newData = update ? target : Object.create(null)
	Reflect.ownKeys(mapFunc).forEach((field) => {
		const value = Object.hasOwn(target, field) ? target[field] : void 0
		newData[field] = (mapFunc[field] as Function)(value, field, target)
	})
	return newData
}
