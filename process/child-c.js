const {initSize} = require('./utils')

const buf = Buffer.alloc(initSize, 'a')

process.on('message', msg=>{
  process.send('ccc')
})

