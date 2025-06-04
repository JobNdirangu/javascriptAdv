// class and Object
// a class is a blueprint/template which has properties and methods
// we use key word class to declare a class
class Dog{
    // consructor is used to initialize the properties
    // and we use keyword constructor
    constructor(name,breed){
        // we use .this to access properties of an instance
        this.name=name
        this.breed=breed
    }
    // method/function/behaviour
    bark(){
        console.log(`${this.name} says Woof!` )
    }
} 
// creating an object
// an object is an instance of a class
let dog1=new Dog("Buddy","Godlen Retriver")
dog1.bark()