
const button = document.querySelector('button')
let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('wrapper').appendChild(resultdiv)

button.addEventListener('click',displayStats)
function displayStats(){
   let object={
    name:"phone",
    price:25000,
    quantity:1
   } 

   console.log(object.price)
   object.price=26000
   console.log(object.price)

   let a='name'
   object[a]='Mobile'
   console.log(object.name)
   object.rate=[1,2,3,4,5]
   console.log(object)

   let user={
    name1:'SAIRAM',
    email:'sairam@gmail.com',
    password:'2001@SAIRAM',
    register:function(){
        console.log(this.name1)
        console.log(this.email)
        console.log(this.password)
    },
    login(){
        console.log("Your user name is",this.name1," Your password is",this.password)
}
   }

   console.log(user)
   user.register()
   user.login()
   
    let text = `The value of object  is "${object.name}" "${object['name']}" "${object.price}" = "${object.quantity}."`
     console.log(text)
    
    document.getElementById('result').innerHTML = text

}

//OOPS

class user{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    login(){
        console.log('hi',this.name)
        console.log('your loggin succesfully')
    }
    logout(){
        console.log('age',this.age)
        console.log('your logout')
    }
}

let unamesai=new user('barani',22)
let saiuname=new user('atchaya',15)
unamesai.login()
saiuname.login()
unamesai.logout()
saiuname.logout()


//static method
class user1{
    static numberofusers=0;
    constructor(name,age){
        this.name=name;
        this._age=age;
        user1.numberofusers++;
    }
    get temp(){
        return this._age
    }
    set temp1(_age){
        if(_age>20){
            _age=200;
            return _age;
        }
    }
    login(){
        console.log('hi',this.name)
        console.log('your loggin succesfully')
    }
    logout(){
        console.log('age',this.age)
        console.log('your logout')
    }
    displayTotalUsers(){
        console.log('this is static method',user1.numberofusers);
    }

}
let unamesai1=new user1('barani',22)
let saiuname1=new user1('atchaya',15)
unamesai1.login()
saiuname1.login()
console.log('No of users are,',user1.numberofusers)
unamesai1.displayTotalUsers()

//inheritance and overwriting method
class childclass extends user1{
    static numberofusers=0;
    constructor(name,age){
        super(name,age);
        this.storage=100
        this.RAM='GB+TB'
        user1.numberofusers++;
    }
  
    login(){
        console.log('hi',this.name)
        console.log('your loggin succesfully',this.RAM)
    }
    logout(){
        console.log('age',this.age)
        console.log('your login',this.storage)
    }
    displayTotalUsers(){
        console.log('this is static method',user1.numberofusers);
    }

}

class user12{
    constructor(age){
        this._age=age;
    }
    get temp(){
        return `${this._age} years old`
    }
    set temp(age){
        if(age>100){
            age=10
        }
        this._age=age
        }
    }
let u1=new user12(22)
u1.temp=200
console.log(u1.temp)

