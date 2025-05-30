// 1. Function with no parameters
function greetings() {
  console.log("Hello, World");
}
greetings();

// 2. Function with one parameter
function greet(name) {
  console.log(`Hello, ${name}`);
}
greet("John");

// 3. Function to sum two numbers
function sum(num1, num2) {
  let total = num1 + num2;
  console.log(`The sum is: ${total}`);
}
sum(12, 10);

//.4. Function to using destructuring
function studentInfo({ name, subject, cat1, cat2 }) {
  const total = cat1 + cat2;
  console.log(`${name} scored ${total} marks in ${subject}.`);
}

//  Call the function with student data
studentInfo({
  name: "Mary",
  subject: "Math",
  cat1: 45,
  cat2: 42
});

// Output: Mary scored 87 marks in Math

// Assignment :create a register function 
// it will have username,email,password and phone
// check if the email is valid by checking the at symbol and dot
// check password if is strong and finally resgister successfully
 
