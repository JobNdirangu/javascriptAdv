//array
let fruits = ["apple", "banana", "orange", "grape"];
fruits.push("Laockwats");   //add an item in the array

let someFruits = fruits.slice(1, 3);

console.log(someFruits); // ["banana", "orange"]
console.log(fruits); // ["apple", "banana", "orange", "grape"] (unchanged)


fruits.pop();       // Removes "Orange" (last one)
console.log(fruits.length)  //get the length of the array

fruits = fruits.filter(item => item !== "banana"); //removes banana only
// fruits = fruits.filter(item => item == "banana");
console.log(fruits)


// Objects are used to store keyed collections of various data and more complex entities. 
// Destructuring lets you unpack values from arrays or properties from objects.

let user = { username: "john_doe", email: "john@example.com" };
let { username, email } = user;
console.log(username); // john_doe

//  Assignment: Create an object with name, age, and city. Use destructuring to extract and log them


