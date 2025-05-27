// Loops allow you to execute a block of code repeatedly until a condition is met. 

// for (initialization; condition; increament) { 
// // code to run 
// } 


for (let i = 1; i <= 5; i++) { 
console.log(i); 
} 


// while (condition) { 
// // code to run 
// } 

let i = 1; 
while (i <= 5) { 
  console.log(i); 
  i++; 
} 


// Runs at least once even if condition is false. 
let j = 1; 
do { 
  console.log(j); 
  j++; 
} while (j <= 5); 


// break: Exits the loop early 
// continue: Skips current iteration and continues 
for (let i = 1; i <= 10; i++) { 
  if (i === 5) continue; 
  if (i === 8) break; 
  console.log(i); 
} 
// Output: 1 2 3 4 6 7 


// loop through an array
let fruits = ["apple", "banana", "orange"]; 
 
for (let i = 0; i < fruits.length; i++) { 
  console.log(fruits[i]); 
} 