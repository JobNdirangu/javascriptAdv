// inheritance
// one class can inherit properties and function from the other class
// normally we have the parent/super class which is inherited by the child/sub class

// super class 
class Animal{
    eat(){
        console.log("Animal is eating")
    }
}
// sub/child class
class Cat extends Animal{
    meow(){
        console.log("Meow..")
    }
}

let whiskers= new Cat()
whiskers.eat()//inherited method
whiskers.meow() //own method