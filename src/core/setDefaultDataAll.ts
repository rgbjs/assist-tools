type AnyObject = {
	[key: string | number | symbol]: any
}

/**
 * 设置对象默认值
 * @param target 目标对象
 * @param args 默认值对象, 获取属性包含 symbol, 如果希望只获取普通属性应使用 setDefaultData()
 * - 当 target 目标对象的数据为 undefind 或 不存在时, 将在默认值对象中挑选出对应的数据覆盖/写入 target 目标对象
 * @returns 目标对象
 */
export default <T1 extends AnyObject, T2 extends AnyObject[]>(target: T1, ...args: T2): T1 & T2[number] => {
	args.forEach((item) => {
		Reflect.ownKeys(item).forEach((field) => {
			if (!Object.hasOwn(target, field)) {
				target[field as keyof T1] = item[field]
				return
			}
			if (target[field] !== void 0) return
			target[field as keyof T1] = item[field]
		})
	})
	return target
}
