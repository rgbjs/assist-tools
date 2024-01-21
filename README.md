## 使用

**安装:**

*pnpm*

```cmd
pnpm i assist-tools
```



*yarn*

```cmd
yarn add assist-tools
```



*npm*

```cmd
npm i assist-tools
```



**导入:**

```js
import { isType } from 'assist-tools'
console.log(isType(10)) // 'number'
```





## isType()

判断数据的类型, 该方法能够区分 `array`, `object`, `null`



**接收参数:**

接收任何数据



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
isType(()=> {}) // 'function'
isType([]) // 'array'
isType({}) // 'object'
isType(new Date()) // 'object'
isType(new RegExp()) // 'object'
```





## isNumber()

判断所有传入的数据是否为 number 类型



**接收参数:**

一个或多个参数



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



**返回值:**

类型: boolean

传递的所有参数都为`有效的数值`才返回 true, 只要有一个不为`有效的数值`即返回 false



**示例:**

```js
isNum(1) // true
isNum(1, 2, NaN, Infinity, -Infinity) // false
isNum(1, 'a') // false
```





## isStrNum() [1.1.0新增]

判断传入的数据是否为有效的数字或数字字符串

`NaN` , `Infinity` , `-Infinity` 被视为无效数值

`''` `' '` 空串和空字符串被视为无效字符串

 `BigInt` 类型被视为 false



**接收参数:**

isStrNum(str [, strict])

- str 任意类型数据
- strict 是否开启严格判断模式, 默认为 true [可选]
  - 当为严格模式:
  - 字符串不允许首尾存在空白字符(空格, 制表, 换行 等)
  - 不允许省略的形式的数字字符串, 例如: '.1' 和 '1.' 不被允许, 数字类型忽略该条规则, 因为数字在使用时会自动补全 0
  - 字符串不允许以无效的多个 0 开头, 例如: 000001 , 数字类型无视该条规则, 因为数字在使用时会自动舍弃无效的 0 



**返回值:**

类型: boolean

传递的参数为`有效的数字` 或 `数字字符串` 返回 true, 否则返回 false

**示例:**

```js
isStrNum(1) // true
isStrNum('1') // true
isStrNum('1.') // false
```





## isInt()

判断所有传入的数据是否为`整数`, `0` 也被视为整数

由于语言特性, `1.0` , `2.00` 这类数值也会被判定为整数



**接收参数:**

一个或多个参数



**返回值:**

类型: boolean

传递的所有参数都为`有效的数值`才返回 true, 只要有一个不为`有效的数值`即返回 false



**示例:**

```js
isInt(1) // true
isInt(1.00, 0) // true
isInt(0, 1.1) // false
isInt(1, 2, NaN, Infinity, -Infinity) // false
isInt(1, 'a') // false
```





## isPositiveInt()

判断所有传入的数据是否为`正整数`, `0` 不属于正整数

由于语言特性, `1.0` , `2.00` 这类数值也会被判定为正整数



**接收参数:**

一个或多个参数



**返回值:**

类型: boolean

传递的所有参数都为`有效的数值`才返回 true, 只要有一个不为`有效的数值`即返回 false



**示例:**

```js
isPositiveInt(1) // true
isPositiveInt(1.00, 2) // true
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

有效数值 (`NaN` , `Infinity` , `-Infinity` 不被视为有效数值)

接收三个参数: isDecimalLen(num, min, max)

- num 有效的数值, 必须为有效数值, 否则将抛出错误, 使用前请先经过 isNum() 判断
- min 有效小数最小长度
- max 有效小数最大长度



**返回值:**

类型: boolean

有效小数长度在指定范围内时返回 true, 否则返回 false



**示例:**

```js
isDecimalLen(1.1, 0, 1) // true
isDecimalLen(1.00000000, 0, 2) // true
isDecimalLen(1.00000001, 0, 2) // false
```



## isEffectiveValue()

判断所有传入的数据是否为`有效值`

`''`, `null`, `undefined`, `NaN`, `Infinity`, `-Infinity` 被视为无效值



**接收参数:**

一个或多个参数



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

判断一个对象/数组/函数上的所有属性值是否都通过测试



**接收参数:**

接收三个参数: isTest(data, testFunc, notTestField)

- data 测试的数据源
- testFunc 用于测试的函数, 该函数会接收到三个参数
  - value 正在测试的值
  - key 正在测试的字段
  - data 测试的数据源
- notTestField 忽略测试的字段集合, 该字段传递一个数组  [可选]



**返回值:**

类型: boolean

每枚举一个属性都将执行一次测试函数(notTestField 参数指定忽略的除外)

测试函数返回一个值, 当该值是 `false`, `0`, `''`, `undefined`, `null`, `NaN` 六个值中的一个时, 测试将被判断为测试失败

只有所有测试函数都返回非六个值其中一个时才为通过测试



**示例:**

```js
isTest({a: 1, b: 2, c: 3}, (value, key) => value > 0) // true
isTest({a: 1, b: 2, c: 3, d: -1, e: -2}, (value, key) => value > 0, ['d', 'e']) // true
```





## notEmpty()

判断一个对象/数组/函数上的所有属性值是否都都为有效值

`''`, `null`, `undefined`, `NaN`, `Infinity`, `-Infinity` 被视为无效值

除此之外, 其他数据都被视为有效值



**接收参数:**

接收三个参数: notEmpty(data, notTestField)

- data 测试的数据源
- notTestField 忽略测试的字段集合, 该字段传递一个数组 [可选]



**返回值:**

类型: boolean

对象/数组/函数上的所有属性值都为有效值则为 true, 只要有一个为无效值则返回 false



**示例:**

```js
notEmpty({a: 1, b: 'a', c: false}) // true
notEmpty({a: 1, b: 'a', c: false, d: '', e: ''}, ['d', 'e']) // true
notEmpty({a: 1, b: 'a', c: undefined, d: '', e: NaN, f: null}) // false
```





## clone()

克隆一个对象/数组



**接收参数:**

接收三个参数: clone(data, deep, func)

- data {object|array} 克隆的数据源
- deep {boolean} 是否深度克隆(深拷贝) , 默认为 true [可选]
- func {function} 控制器, 该参数为一个函数, 接收三个参数, 通过传递该参数可以控制克隆行为 [可选]
  - newData 克隆后的新对象/数组
  - k 当前进行中的字段
  - val 当前进行中的值

当传入控制器函数时, 您需手动进行赋值操作



**返回值:**

类型: object/array(视传入的数据而定)



**示例:**

```js
clone({a: [1, {b: 2}]}) // {a: [1, {b: 2}]}
clone({a: [1, {b: 2}]}, true, (newData, k, val) => {
    newData[k] = val // 手动执行赋值
}) // {a: [1, {b: 2}]}
```





## cloneEffectiveValue()

克隆一个对象/数组中的有效值, 该方法为深克隆(深拷贝)

`''`, `null`, `undefined`, `NaN`, `Infinity`, `-Infinity` 被视为无效值



**接收参数:**

接收三个参数: cloneEffectiveValue(data, condition)

- data 克隆的数据源
- condition {function} 控制器, 该参数为一个函数, 接收一个参数, 通过传递该参数可以控制是否克隆的行为 [可选]
  - val 当前进行中的值

在控制器中通过返回 true / false 来决定是否克隆, true 克隆该值, false 丢弃该值



**返回值:**

类型: object/array(视传入的数据而定)



**示例:**

```js
cloneEffectiveValue({a: [1, {b: 2, c: null}]}) // {a: [1, {b: 2}]}
cloneEffectiveValue({a:[1, {b: 2, c: null, d: ''}]}, (val) => {
    return val === 2 ? false : true
}) // {a:[1, {c: null, d: ''}]}
```





## debounce()

函数防抖, 传入一个函数返回包装后的防抖函数

**接收参数:** debounce(callback, delay)

- callback {function} 需要防抖的函数
- delay {number} 防抖的时长(单位/毫秒), 默认为 200 [可选]



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





## formatDate()

格式化一个 "日期" 为一个可读时间(本地时间), 更复杂的时间处理请使用专业的库

**接收参数:** formatDate(time, format, isMillisecond)

- time {string|number|Date} 一个符合时间格式的字符串或时间戳或时间对象
  - 不符合条件的将抛出 TypeError
  - 如果时间无法保证格式, 请使用 try catch 进行错误捕获, 以防止影响后续运行

- format {string} 格式化格式: YYYY-MM-DD HH:mm:ss (YYYY, MM, HH, mm, ss => 关键字将被替换), 默认为 'YYYY-MM-DD HH:mm:ss' [可选]
- isMillisecond {boolean} 是否显示毫秒数, 默认为 false [可选]



**返回值:**

类型: string

格式化后的时间



**示例:**

```js
formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss') // 2023-12-14 16:20:10
formatDate(Date.now(), 'YYYY/MM/DD HH:mm:ss') // 2023/12/14 16:20:10
```





## 1.0.0 版本弃用且删除

### isDecimalLenAll() [废弃]

判断多个数字后有效小数长度是否在指定范围内

例如: 

1.00000 有效小数长度为 0

1.00200 有效小数长度为 3

1.00123 有效小数长度为 5



**接收参数:**

有效数值 (`NaN` , `Infinity` , `-Infinity` 不被视为有效数值)

接收三个参数: isDecimalLen(numArr, min, max)

- numArr 有效的数值数组
- min 有效小数最小长度
- max 有效小数最大长度



**返回值:**

类型: boolean

数组内所有数字有效小数长度都在指定范围内时返回 true, 只要有一个为通过测试则返回 false



**示例:**

```js
isDecimalLenAll([1.1, 1.0000], 0, 1) // true
isDecimalLenAll([1.00000000, 2], 0, 2) // true
isDecimalLenAll([1.00000001], 0, 2) // false
```





### convertTimer() [废弃]

**已废弃, 请使用 formatDate() 或更加专业的库替代处理时间**

将时间戳/时间对象转为一个可读时间

**接收参数:** convertTimer(timer)

- timer {number|Date} 时间戳/时间对象



**返回值:**

类型: string

一个可读时间, 示例: 2023-10-30 22:23:00



**示例:**

```js
convertTimer(new Date()) // 2023-10-30 22:23:00
convertTimer(Date.now()) // 2023-10-30 22:23:00
```

