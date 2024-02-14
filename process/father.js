const {fork} = require('child_process')
const {initSize, monitorTxtFile} = require('./utils')
const childA = fork('./child-a.js')
const childB = fork('./child-b.js')
const childC = fork('./child-c.js')

function create() {
  monitorTxtFile(()=>{
    console.log('aaa---')
    childA.send('aaa')
  })
  
  setTimeout(()=>{
    monitorTxtFile(()=>{
      console.log('bbb---')
      childB.send('bbb')
    })
  }, 2000)
  
  setTimeout(()=>{
    monitorTxtFile(()=>{
      console.log('ccc---')
      childC.send('ccc')
    })
  }, 4000)
}

create()


childA.on('message', msg =>{
  console.log('child-AAA')
  console.log(msg)
})

childB.on('message', msg =>{
  console.log('child-BBB')
  console.log(msg)
})

childC.on('message', msg =>{
  console.log('child-CCC')
  console.log(msg)
})
