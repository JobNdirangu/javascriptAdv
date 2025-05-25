// String - represents text
let str = "Hello, JavaScript!";
console.log(typeof str); // "string"

// Number - represents both integers and floating-point numbers
let num = 42;
let pi = 3.14;
console.log(typeof num); // "number"
console.log(typeof pi);  // "number"

// BigInt - used for very large integers
let bigInt = 1234567890123456789012345678901234567890n;
console.log(typeof bigInt); // "bigint"

// Boolean - represents true or false
let isAvailable = true;
let isDone = false;
console.log(typeof isAvailable); // "boolean"

// Undefined - a variable declared but not assigned
let notAssigned;
console.log(typeof notAssigned); // "undefined"

// Null - represents intentional absence of any object value
let emptyValue = null;
console.log(typeof emptyValue); // "object" (bug in JavaScript)
