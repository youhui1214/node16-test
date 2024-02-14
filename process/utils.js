const fs = require('fs')


const initSize = 1024

const pathFile = './random.txt'

function monitorTxtFile(callback) {
  let status = fs.readFileSync(pathFile, 'utf-8')
  const str = status.slice(0,1)
  if (Number(str) === 1) {
    callback()
  } else {
    const timer = setInterval(()=>{
      console.log(3333)
      let status = fs.readFileSync(pathFile, 'utf-8')
      const str = status.slice(0,1)
      if (Number(str) === 1) {
        clearInterval(timer)
        callback()
      }
    }, 2000)
  }

}


module.exports = {
  initSize,
  pathFile,
  monitorTxtFile
}
