// Abstrction
// hiding of comlex details.
// users only need to know how to use somethings not how it works
class CoffeeMachine{
    #startEngine(){
        console.log("Heating water...")
    }
    brew(){
        console.log("Starting coffee...")
        this.#startEngine()
        console.log("Coffee is ready!")
    }
}
let coffee=new CoffeeMachine()
coffee.brew()