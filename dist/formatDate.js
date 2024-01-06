/**
 * 格式化一个 "日期" 为一个可读时间(本地时间), 更复杂的时间处理请使用专业的库
 * @param time 一个符合时间格式的字符串或时间戳或时间对象
 * - 不符合条件的将抛出 TypeError
 * - 如果时间无法保证格式, 请使用 try catch 进行错误捕获, 以防止影响后续运行
 * @param format 格式化格式: YYYY-MM-DD HH:mm:ss (YYYY, MM, HH, mm, ss => 关键字将会被替换) [可选]
 * @param isMillisecond 是否显示毫秒数, 默认为 false
 * @returns 格式化后的时间
 */
const formatDate = (time, format = 'YYYY-MM-DD HH:mm:ss', isMillisecond = false) => {
    let date;
    if (time instanceof Date) {
        date = time;
    }
    else {
        date = new Date(time);
    }
    if (date.toString() === 'Invalid Date') {
        throw new TypeError('"time" cannot be converted to a Date object');
    }
    const year = String(date.getFullYear()).padStart(4, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');
    let millisecond = '';
    if (isMillisecond)
        millisecond = date.getMilliseconds();
    return format.replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hour)
        .replace('mm', minute)
        .replace('ss', second)
        + millisecond;
};
export default formatDate;
