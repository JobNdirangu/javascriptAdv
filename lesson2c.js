// object 

let student = {
  // Properties
  name: "John Doe",
  age: 20,
  grade: "A",
  isEnrolled: true,

};


// Access properties using: - Dot notation: `object.key` - Bracket notation: `object["key"]`
console.log(student.name)
console.log(student['name'])

// Assignmet: create an object of player,mpesa transaction,car model


// Objects are used to store keyed collections of various data and more complex entities. 
// Destructuring lets you unpack values from arrays or properties from objects.

let user = { username: "john doe", email: "john@gmail.com" };
let { username, email } = user;
console.log(username); // john_doe

//  Assignment: Create an object product with properties id name, cost, quantity
//  and description. Use destructuring to extract and log them
