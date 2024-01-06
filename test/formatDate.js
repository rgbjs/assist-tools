import { formatDate } from '../dist/index.js'

console.log(formatDate(new Date())) // xxxx-xx-xx xx:xx:xx
console.log(formatDate(new Date(), 'YYYY/MM/DD HH:mm:ss')) // xxxx/xx/xx xx:xx:xx
console.log(formatDate(Date.now(), 'YYYY/MM/DD HH:mm:ss')) // xxxx/xx/xx xx:xx:xx
console.log(formatDate('2023-12-30 00:00', 'YYYY/MM/DD HH:mm:ss')) // 2023/12/30 00:00:00
console.log(formatDate('2023/12/30 00:00', 'YYYY/MM/DD HH:mm:ss')) // 2023/12/30 00:00:00