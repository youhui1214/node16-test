
let bufChar = Buffer.alloc(10, 'abc')

console.log(bufChar)

const size = 2

const aa = bufChar.slice(0,2)
console.log(aa)

bufChar = bufChar.slice(size); // 更新缓存池数据
console.log(bufChar)



