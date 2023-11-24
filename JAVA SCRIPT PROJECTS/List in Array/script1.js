let arr=['ECE','CSE','IT','EEE','MECH','CIVIL', 'AI', 'ROBOTICS'];


arr.forEach(val=>{
    let el=document.createElement("option");
    el.textContent=val
    el.value=val
document.getElementById('input').appendChild(el);
    })