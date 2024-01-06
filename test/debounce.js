import { debounce } from '../dist/index.js'

const func = debounce((a) => {
    console.log(a)
}, 300)

func(1)
func(1)
func(1)
func(1)
func(1)
// 300 ms 内只输出一次
