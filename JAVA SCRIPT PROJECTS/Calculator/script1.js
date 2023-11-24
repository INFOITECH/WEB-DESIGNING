
const button = document.querySelector('button')
let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('wrapper').appendChild(resultdiv)

button.addEventListener('click',displayStats)
function displayStats(){
    
    const input = document.getElementById("input")
    const operator = input.options[input.selectedIndex].value
    const value_1 = document.getElementById("value1").value
    const value_2 = document.getElementById("value2").value
    let answer=0
    switch(operator){
        case '+':
            answer=Number(value_1)+Number(value_2)
            break
        case '-':
            answer=Number(value_1)-Number(value_2)
            break
        case '*':
            answer=Number(value_1)*Number(value_2)
            break
        case '/':
            answer=Number(value_1)/Number(value_2)
            break

    }
    let text = `The value of ${value_1} ${operator} ${value_2} = ${answer}.`
     console.log(text)
    
    document.getElementById('result').innerHTML = text

}




