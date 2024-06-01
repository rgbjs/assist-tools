## 2.x.x 以下版本请使用旧版文档

```url
https://github.com/rgbjs/assist-tools/tree/1.2.1
```

## 使用

**安装:**

_pnpm_

```cmd
pnpm i assist-tools
```

_yarn_

```cmd
yarn add assist-tools
```

_npm_

```cmd
npm i assist-tools
```

**导入:**

内部采用 ESModule 具名导出, 支持 tree shaking

```js
import { isType } from 'assist-tools'
console.log(isType(10)) // 'number'
```

如果你想使用 CommonJS 模块化规范, 那么你可以使用以下方式导入

```js
import { isType } from 'assist-tools/dist/main.cjs.js'
console.log(isType(10)) // 'number'
```

## isType()

判断数据的类型, 该方法能够区分 `array`, `object`, `null`

**接收参数:**

一个或多个参数

isType(param [, ...paramN])

-   param 任何数据

**返回值:**

类型: string

返回数据的类型

**示例:**

```js
isType(10) // 'number'
isType('a') // 'string'
isType(true) // 'boolean'
isType(BigInt(1)) // 'bigint'
isType(Symbol()) // 'symbol'
isType(undefined) // 'undefined'
isType(null) // 'null'
isType(() => {}) // 'function'
isType([]) // 'array'
isType({}) // 'object'
isType(new Date()) // 'object'
isType(new RegExp()) // 'object'
```

## isNumber()

判断所有传入的数据是否为 number 类型

**接收参数:**

一个或多个参数

isNumber(param [, ...paramN])

-   param 任何数据

**返回值:**

类型: boolean

传递的所有参数都为 number 才返回 true, 只要有一个不为 number 即返回 false

**示例:**

```js
isNumber(1) // true
isNumber(1, 2, NaN, Infinity, -Infinity) // true
isNumber(1, 'a') // false
```

## isString()

判断所有传入的数据是否为 string 类型

**接收参数:**

一个或多个参数

isString(param [, ...paramN])

-   param 任何数据

**返回值:**

类型: boolean

传递的所有参数都为 string 才返回 true, 只要有一个不为 string 即返回 false

**示例:**

```js
isString('a') // true
isString('a', '', '10') // true
isString('a', 1) // false
```

## isNum()

判断所有传入的数据是否为有效的数值

`NaN` , `Infinity` , `-Infinity` 被视为无效数值

**接收参数:**

一个或多个参数

isNum(param [, ...paramN])

-   param 任何数据

**返回值:**

类型: boolean

传递的所有参数都为`有效的数值`才返回 true, 只要有一个不为`有效的数值`即返回 false

**示例:**

```js
isNum(1) // true
isNum(1, 2, NaN, Infinity, -Infinity) // false
isNum(1, 'a') // false
```

## isStrNum()

判断传入的数据是否为有效的数字或数字字符串

`NaN` , `Infinity` , `-Infinity` 被视为无效数值(即 false)

`BigInt` 类型被视为 false

`' '` 空白字字符被视为 false

`''` 空串被视为 false

**接收参数:**

isStrNum(str [, strict])

-   str 任意类型数据
-   strict 是否开启严格判断模式, 默认为 true [可选]
    -   当为严格模式:
    -   字符串不允许首尾存在空白字符(空格, 制表, 换行 等)
    -   不允许省略的形式的数字字符串, 例如: '.1' 和 '1.' 不被允许, 数字类型忽略该条规则, 因为数字在使用时会自动补全 0
    -   字符串不允许以无效的多个 0 开头, 例如: 000001 , 数字类型无视该条规则, 因为数字在使用时会自动舍弃无效的 0

**返回值:**

类型: boolean

传递的参数为`有效的数字` 或 `数字字符串` 返回 true, 否则返回 false

**示例:**

```js
// 严格模式和普通模式都为 false
isStrNum('') // false
isStrNum('', false) // false
isStrNum('   ') // false
isStrNum('   ', false) // false
isStrNum(NaN) // false
isStrNum(NaN, false) // false
isStrNum(Infinity) // false
isStrNum(Infinity, false) // false
isStrNum(-Infinity) // false
isStrNum(-Infinity, false) // false

// 非严格模式(普通模式)
isStrNum('1', false) // true
isStrNum('0', false) // true
isStrNum('-0', false) // true
isStrNum('-1', false) // true
isStrNum('-1.1', false) // true
isStrNum('1.1', false) // true
isStrNum('1.1000', false) // true
isStrNum('   1.1000', false) // true
isStrNum('1.1000   ', false) // true
isStrNum('   1.1000   ', false) // true
isStrNum('   1.   ', false) // true
isStrNum('   .1   ', false) // true
isStrNum('   .0   ', false) // true
isStrNum('0b10', false) // true

// 严格模式
isStrNum('  1') // false
isStrNum('1  ') // false
isStrNum('  1  ') // false
isStrNum('   -0') // false
isStrNum('.1') // false
isStrNum('1.') // false
isStrNum('') // false
isStrNum('a') // false
isStrNum('00') // false
isStrNum('.0') // false
isStrNum('0.') // false
isStrNum('-0.') // false
isStrNum('-') // false
isStrNum('+') // false
isStrNum('0b10') // false
```

## isInt()

判断所有传入的数据是否为`整数`, `0` 也被视为整数

由于语言特性, `1.0` , `2.00` 这类数值也会被判定为整数

**接收参数:**

一个或多个参数

isInt(param [, ...paramN])

-   param 任何数据

**返回值:**

类型: boolean

传递的所有参数都为`有效的数值`才返回 true, 只要有一个不为`有效的数值`即返回 false

**示例:**

```js
isInt(1) // true
isInt(1.0, 0) // true
isInt(0, 1.1) // false
isInt(1, 2, NaN, Infinity, -Infinity) // false
isInt(1, 'a') // false
```

## isPositiveInt()

判断所有传入的数据是否为`正整数`, `0` 不属于正整数

由于语言特性, `1.0` , `2.00` 这类数值也会被判定为正整数

**接收参数:**

一个或多个参数

isPositiveInt(param [, ...paramN])

-   param 任何数据

**返回值:**

类型: boolean

传递的所有参数都为`有效的数值`才返回 true, 只要有一个不为`有效的数值`即返回 false

**示例:**

```js
isPositiveInt(1) // true
isPositiveInt(1.0, 2) // true
isPositiveInt(0, 1) // false
isPositiveInt(-2, 1) // false
isPositiveInt(1, 2, NaN, Infinity, -Infinity) // false
isPositiveInt(1, 'a') // false
```

## isId()

判断所有传入的数据是否为 id

id: 大于 0 的正整数

该方法是 `isPositiveInt()` 的别名, 使用请参考 isPositiveInt()

```js
isId === isPositiveInt // true
```

## isDecimalLen()

判断数字后有效小数长度是否在指定范围内

例如:

1.00000 有效小数长度为 0

1.00200 有效小数长度为 3

1.00123 有效小数长度为 5

**接收参数:**

有效数值 (`NaN` 不被视为有效数值)

接收三个参数: isDecimalLen(num, min, max)

-   num 有效的数值, 必须为有效数值, 否则将抛出错误, 使用前请先经过 isNum() 判断
-   min 有效小数最小长度, 支持 -Infinity
-   max 有效小数最大长度, 支持 Infinity

**返回值:**

类型: boolean

有效小数长度在指定范围内时返回 true, 否则返回 false

**示例:**

```js
isDecimalLen(1.1, 0, 1) // true
isDecimalLen(1.0, 0, 2) // true
isDecimalLen(1.00000001, 0, 2) // false
```

## isEffectiveValue()

判断所有传入的数据是否为`有效值`

`''`, `null`, `undefined`, `NaN`, `Infinity`, `-Infinity` 被视为无效值

**接收参数:**

一个或多个参数

isEffectiveValue(param [, ...paramN])

-   param 任何数据

**返回值:**

类型: boolean

传递的所有参数都为`有效值`才返回 true, 只要有一个不为`有效值`即返回 false

**示例:**

```js
isEffectiveValue(1) // true
isEffectiveValue(1, 'a') // true
isEffectiveValue(null, '', undefined, NaN) // false
```

## isTest()

判断一个对象/数组/函数上的所有属性值是否都通过测试(浅层判断)

**接收参数:**

接收三个参数: isTest(data, testFunc [, notTestField])

-   data 测试的数据源
-   testFunc 用于测试的函数, 该函数会接收到三个参数
    -   value 正在测试的值
    -   key 正在测试的字段
    -   data 测试的数据源
-   notTestField 忽略测试的字段集合, 该字段传递一个数组 [可选]

**返回值:**

类型: boolean

每枚举一个属性都将执行一次测试函数(notTestField 参数指定忽略的除外)

测试函数返回一个值, 当该值是 `false`, `0`, `''`, `undefined`, `null`, `NaN` 六个值中的一个时, 测试将被判断为测试失败

只有所有测试函数都返回非六个值其中一个时才为通过测试

**示例:**

```js
isTest({ a: 1, b: 2, c: 3 }, (value, key) => value > 0) // true
isTest({ a: 1, b: 2, c: 3, d: -1, e: -2 }, (value, key) => value > 0, ['d', 'e']) // true
```

## notEmpty()

判断一个对象/数组/函数上的所有属性值是否都都为有效值(浅层判断)

`''`, `null`, `undefined`, `NaN`, `Infinity`, `-Infinity` 被视为无效值

除此之外, 其他数据都被视为有效值

**接收参数:**

接收三个参数: notEmpty(data [, notTestField])

-   data 测试的数据源
-   notTestField 忽略测试的字段集合, 该字段传递一个数组 [可选]

**返回值:**

类型: boolean

判断其身上所有属性值是否为有效值(可遍历的, 且不包括原型)

**示例:**

```js
notEmpty({ a: 1, b: 'a', c: false }) // true
notEmpty({ a: 1, b: 'a', c: false, d: '', e: '' }, ['d', 'e']) // true
notEmpty({ a: 1, b: 'a', c: undefined, d: '', e: NaN, f: null }) // false
```

## notEmptyDeep()

判断一个对象/数组/函数上的所有属性值是否都都为有效值(深度判断)

`''`, `null`, `undefined`, `NaN`, `Infinity`, `-Infinity` 被视为无效值

除此之外, 其他数据都被视为有效值

**接收参数:**

接收两个参数: notEmptyDeep(data [, notTestField])

-   data 测试的数据源
-   notTestField 忽略测试的字段集合, 该字段传递一个数组 [可选]

**返回值:**

类型: boolean

判断其身上所有属性值是否为有效值(可遍历的, 且不包括原型)

**示例:**

```js
notEmptyDeep({ a: 1, b: 'a', c: false }) // true
notEmptyDeep({ a: 1, b: 'a', c: { d: '' } }, ['d']) // true
notEmptyDeep({ a: 1, b: 'a', c: { d: '' } }) // false
```

## cloneEffectiveValue()

克隆一个对象/数组中的有效值, 该方法为深克隆(深拷贝)

`''`, `null`, `undefined`, `NaN`, `Infinity`, `-Infinity` 被视为无效值

**接收参数:**

接收两个参数: cloneEffectiveValue(data [, condition])

-   data 克隆的数据源
-   condition {function} 控制器, 该参数为一个函数, 接收一个参数, 通过传递该参数可以控制是否克隆的行为 [可选]
    -   val 当前进行中的值

在控制器中通过返回 true / false 来决定是否克隆, true 克隆该值, false 丢弃该值

**返回值:**

类型: object/array(视传入的数据而定)

**示例:**

```js
cloneEffectiveValue({ a: [1, { b: 2, c: null }] }) // {a: [1, {b: 2}]}
cloneEffectiveValue({ a: [1, { b: 2, c: null, d: '' }] }, (val) => {
	return val === 2 ? false : true
}) // {a:[1, {c: null, d: ''}]}
```

## debounce()

函数防抖, 传入一个函数返回包装后的防抖函数

**接收参数:** debounce(callback [, delay])

-   callback {function} 需要防抖的函数
-   delay {number} 防抖的时长(单位/毫秒), 默认为 200 [可选]

**返回值:**

类型: function

返回一个保证后的防抖函数

**示例:**

```js
const function say() {
    console.log(111)
}

const sayFn1 = debounce(say, 300)
sayFn1()
sayFn1()
sayFn1() // 111 300 毫秒内只输出1次
```

## formatDate() \*

**关键字与 1.x.x 版本存在差异**

格式化一个 "日期" 为一个可读时间(本地时间), 更复杂的时间处理请使用专业的库

**接收参数:** formatDate(time [, format [, isMillisecond]])

-   time {string|number|Date} 一个符合时间格式的字符串或时间戳或时间对象

    -   不符合条件的将抛出 TypeError
    -   如果时间无法保证格式, 请使用 try catch 进行错误捕获, 以防止影响后续运行

-   format {string} YYYY, MM, DD, hh, mm, ss => 关键字将被替换, 默认为 'YYYY-MM-DD hh:mm:ss' [可选]
-   isMillisecond {boolean} 是否显示毫秒数, 默认为 false [可选]

**返回值:**

类型: string

格式化后的时间

**示例:**

```js
formatDate(new Date(), 'YYYY-MM-DD hh:mm:ss') // 2023-12-14 16:20:10
formatDate(Date.now(), 'YYYY/MM/DD hh:mm:ss') // 2023/12/14 16:20:10
```

## readOnly()

将一个引用数据类型包装为只读数据

**配置选项在 2.1.x 中引入, 小于此版本仅允许使用简写形式**

**接收参数:** readOnly(data [, options | mode])

-   data {Object|Array|Function} 需要包装为只读数据的引用数据 @param options 配置选型
-   options {Options | 'strict' | 'default' | 'looseFitting' } 配置选项
-   可直接传递 'strict' | 'default' | 'looseFitting' 简写形式(简写 mode)
-   **options.mode** 模式 , 默认为 default [可选]

    -   strict 严格模式, 禁止函数调用(防止产生副作用)
    -   default 默认模式, 允许函数调用, 但禁止内部通过 this 来修改数据
    -   looseFitting 开放模式, 允许函数调用, 允许所有副作用产生
    -   自定义模式 传递一个函数, 接收参数 target: 目标函数 thisArg: 绑定的 this argArray: 传递的参数列表, 返回 true / false 来决定是否允许调用

-   **options.unReadOnly** 是否允许 unReadOnly 解包, 默认为 false

-   **options.repeatReadOnly** 是否允许重复包装为只读对象, 即当 readOnly 遇到的数据已经是一个只读数据了, 是否允许再包装多层, true 允许, false 不允许, 直接返回已包装对象, 默认为 false

-   **options.sign** 代理标识, 只有标识一致才可使用 unReadOnly() [可选] [2.2.x 新增]

**返回值:**

类型: Object|Array|Function(视传入的数据而定)

包装后的数据

**示例:**

```js
const newObj = readOnly({ a: 1, b: 2 })
const newArr = readOnly([1, 2])
```

## isReadOnly()

判断一个数据是不是一个只读的代理数据(被 readOnly 包装后的)

**接收参数:** isReadOnly(data)

-   data {Object|Array|Function} 需要包装为只读数据的引用数据

**返回值:**

类型: boolean

是只读数据返回 true, 否则返回 false

**示例:**

```js
const newObj = readOnly({ a: 1, b: 2 })
const result1 = isReadOnly(newObj) // true
const result2 = isReadOnly({}) // false
```

## cloneReadOnlyData() [2.1.x 新增]

克隆指定的数据

**接收参数:** cloneReadOnlyData(data)

-   data {any} 需要克隆的数据

**返回值:**

类型: 视传入数据而定

返回一个新的数据

**示例:**

```js
const obj = { a: 1, b: 2 }
const newObj = readOnly(obj)
const result = cloneReadOnlyData(newObj) // { a: 1, b: 2 } 一个新的数据
result === obj // false
result === newObj // false
```

## unReadOnly() [2.1.x 新增]

解除只读包装

**接收参数:** unReadOnly(data [, sign])

-   data {any} 需要解除的只读对象, 必须 readOnly 中配置选项 options.unReadOnly 为 true, 否则将抛出错误

-   sign {any} 代理标识, 必须同 readOnly 中配置选项 options.sign 一致, 否则将抛出错误 [2.2.x 新增]

**返回值:**

类型: 视传入数据而定

返回原始的未包装的数据

**示例:**

```js
const obj = { a: 1, b: 2 }
const newObj = readOnly(obj, { unReadOnly: true })
const result = unReadOnly(newObj) // { a: 1, b: 2 } 一个新的数据
result === newObj // false
result === obj // true
```

## checkReadOnlySign() [2.2.x 新增]

判断一个代理数据标识是否相等

**接收参数:** checkReadOnlySign(data [, sign])

-   target {any} 判断的目标

-   sign {any} 判断的目标代理标识

**返回值:**

类型: boolean

**示例:**

```js
const obj = { a: 1, b: 2 }
const newObj = readOnly(obj, { sign: 'a' })
checkReadOnlySign(newObj, 'a') // true
checkReadOnlySign(newObj, 'b') // false
```

## cloneDeep() [2.2.x 新增]

lodash 的 cloneDeep

深度克隆

使用请参考 lodash

## cloneDeepWith() [2.2.x 新增]

lodash 的 cloneDeepWith

自定义深度克隆

使用请参考 lodash
