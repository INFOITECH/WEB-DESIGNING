import c from './ob_2.js'

let user1=new c('sai',22)
user1.login()
user1.logout()
console.log('hello')
function sync(){
    console.log('sai')
    console.log('sai')
    console.log('SAI')
}

sync()
let a=10;
let b=20;
let d=a+b;
console.log(d)
setTimeout(()=>console.log('step1'),3000)
setTimeout(()=>console.log('step2'),2000)
setTimeout(()=>console.log('step3'),1000)

console.log('hello')
for(let i=1; i<=10; i++){
    console.log(i)
}
user1.login().logout()
// setInterval(()=>console.log('sai'),2000)