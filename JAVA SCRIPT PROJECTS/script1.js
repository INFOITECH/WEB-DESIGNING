let arr=[6,-5,7,-2,4,6,-1];

const button = document.querySelector('button')
button.addEventListener('click',function displayStats(){
    let ab=[]
    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            ab.push(arr[i])
        }
    }
    console.log(ab)
    document.getElementById('result').innerHTML=ab
    })

    let ab1=[]
function select(arr){    
    for(let i=0; i<arr.length; i++){
        ab1.push(arr[i])
    }

    let el=document.createElement("option");
    el.textContent=ab1;
    el.value=ab1
                            
    document.getElementById('input').appendChild(el);

    }

select(arr)

//Exercise:

console.log("Hello Tech")

//First exercise
arr=[4,6,2,3,1,1,3,5,7,8,4,3]
let ab=arr.filter((item,index)=>arr.indexOf(item)===index)
console.log(ab)

//Second exercise
Name="Robert Andrew Gearge"
let ba=Name.split(' ').map(word=>word.charAt(0)).join('');
console.log(ba)

//Third exercise
// Sample array with both positive and negative numbers
let numbers = [1, -2, 3, -4, 5, -6, 7, -8];

// Use the reduce method to find the sum of positive numbers
let sumOfPositives = numbers.reduce(function (accumulator, currentValue) {
    
    if (currentValue > 0) {
        accumulator.push(currentValue);
    }
    return accumulator
}, []);

// Log the sumOfPositives
console.log(sumOfPositives);