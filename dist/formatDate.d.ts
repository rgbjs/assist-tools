type Time = string | number | Date;
/**
 * 格式化一个 "日期" 为一个可读时间(本地时间), 更复杂的时间处理请使用专业的库
 * @param time 一个符合时间格式的字符串或时间戳或时间对象
 * - 不符合条件的将抛出 TypeError
 * - 如果时间无法保证格式, 请使用 try catch 进行错误捕获, 以防止影响后续运行
 * @param format 格式化格式: YYYY-MM-DD HH:mm:ss (YYYY, MM, HH, mm, ss => 关键字将会被替换) [可选]
 * @param isMillisecond 是否显示毫秒数, 默认为 false
 * @returns 格式化后的时间
 */
declare const formatDate: (time: Time, format?: string, isMillisecond?: boolean) => string;
export default formatDate;
