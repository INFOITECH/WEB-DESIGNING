const button = document.querySelector('button')
let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('wrapper').appendChild(resultdiv)

//event listener
button.addEventListener('click',displayStats)
function displayStats(){
    
    const eligibility = document.querySelector('input[id=qualification]:checked').value

    let ELIGIBLE
    switch(eligibility){
        case 'under high school':
            ELIGIBLE= 'YOUR NOT ELIGIBLE'
            break
        case 'high school':
            ELIGIBLE= 'YOUR ELIGIBLE'
            break
        case 'UG':
            ELIGIBLE= 'YOUR ELIGIBLE'
            break
        case 'PG':
            ELIGIBLE= 'YOUR NOT ELIGIBLE'
            break
        default:
            ELIGIBLE= 'YOUR NOT ELIGIBLE'
            break

    }
    let text = `Your the ${eligibility}, so ${ELIGIBLE}.`
     console.log(text)
    
    document.getElementById('result').innerHTML = text

}




