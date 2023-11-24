let arr=['ECE','CSE','IT','EEE','MECH','CIVIL', 'AI', 'ROBOTICS'];


const input=document.getElementById('input')
let ab
function select(arr){
    for(let i=0; i<arr.length; i++){
        ab=arr[i]
    let el=document.createElement("option");
    el.textContent=ab;
    el.value=ab
document.getElementById('input').appendChild(el);
    }
    }

select(arr)

/*
let usd=[20,30,40]
let inr=usd.map(x=>x*83)
console.log(inr)

inr=usd.map(count)
function count(val){
    return val*83
}
console.log(inr)


let input1=[
    {name:'jhon',age:15},
    {name:'krishna',age:16},
    {name:'radha',age:17},
    {name:'ram',age:20},
    {name:'sitha',age:20},
]

const i=input1.map(x=>x.age)
console.log(i)

let cons1t=[1,120,3,450,5,45]
let les=cons1t.filter(x=>x<100)
console.log(les)

let total=cons1t.reduce((total,result)=>total+result)
console.log(total)

arr2=[
    ['a','b','c'],
    ['c','d','e'],
    ['e','f','g']
];

let cont=arr2.flat().reduce(
    (accum,var1)=>{
        if(accum[var1]){
            accum[var1]++
        }
        else{
            accum[var1]=1
        }
        return accum
    },{});

    console.log(cont)


let set= new Set()
set.add(4)
set.add(5)
set.add({'a':1,'b':2})
set.add({'a':1,'b':2})
set.add(45)
console.log(set)

console.log(Array.from(set))

let map1=new Map()
map1.set('a',1)
map1.set('b',2)
map1.set('a',3)
console.log(map1)

for(let i of map1){
    console.log(i)
}

for(let [k,v] of map1){
    console.log(k,v)
}

for(let i of map1.values()){
    console.log(i)
}

map1.forEach((v,k)=>{
    console.log('key',k,'value',v)
})

let arr1=[['a',45],['b',45]]
let map3=new Map(arr1)
console.log(map3) 
console.log(...map3)
*/



/*

let opt = arr=>{
    for(let i=0; i<arr.length; i++){
        ab=arr[i]
    let el=document.createElement("option");
    el.textContent=ab;
    el.value=ab
document.getElementById('input').appendChild(el);
    }
    }

opt(arr)

*/