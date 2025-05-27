// Array Methods
// .map() – Transform each element
let numbers = [1, 3, 2, 4, 3];       

let sum=0

let doubled = numbers.map(n => sum =sum+n ); // [2, 4, 6]

console.log(sum)

// // .filter() – Keep only matching elements
let evens = numbers.filter(n => n % 2 === 0); 
console.log(evens)


// .find() – Find first match
let found = numbers.find(n => n > 1); // 2
console.log(found)


//  Assignment: Create an array of five numbers. Use map to double them and filter to extract
//  numbers > 5.

// Use .map() to convert an array of prices to prices with 16% value added tax VAT and show the final cost.



// // Assignment

// // Step 1: Create a list of 5 countries
// let countries = ["Kenya", "Brazil", "Canada", "Germany", "Japan"];

// // Step 2: Use .slice() to get a portion of the list
// // Get the 2nd to 4th countries (index 1 to index 3, end index is not included)
// let someCountries = countries.slice(1, 4);
// console.log("Sliced Countries:", someCountries); // Output: ["Brazil", "Canada", "Germany"]

// // Step 3: Use .filter() to get countries with names longer than 5 characters
// let longNamedCountries = countries.filter(country => country.length > 5);
// console.log("Countries with long names:", longNamedCountries); // Output: ["Brazil", "Canada", "Germany"]
