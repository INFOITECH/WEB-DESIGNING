class user{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    login(){
        console.log('hi',this.name)
        console.log('your loggin succesfully')
        return this
    }
    logout(){
        console.log('age',this.age)
        console.log('your logout')
        return this
    }
}

export default user