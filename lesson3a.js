let name = "  Alice  Wanjiku";
let age = 25;


// 1. Remove leading/trailing spaces and build a greeting using template literals
let greeting = `Hello, ${name.trim()}! You are ${age} years old.`;
console.log(greeting.toUpperCase()); // Converts the greeting to uppercase

// 2. .slice(start, end) – extracts characters from index 2 to 3 (end is not included)
console.log(name.slice(2, 4)); // Output: "ic"

// 3. .includes(substring) – checks if 'c' exists in the string
console.log(name.includes("c")); // Output: true

// 4. .toUpperCase() – converts the string to uppercase
console.log(name.toUpperCase()); // Output: "  ALICE  WANJIKU"

// 5. .toLowerCase() – converts the string to lowercase
console.log(name.toLowerCase()); // Output: "  alice  wanjiku"

// 6. .substring(start, end) – similar to slice, extracts part of the string
console.log(name.substring(2, 4)); // Output: "ic"

// 7. .indexOf(substring) – returns the position of the first occurrence
console.log(name.indexOf("W")); // Output: 9

// 8. .trim() – removes spaces from both ends
console.log(name.trim()); // Output: "Alice  Wanjiku"

// 9. .replace(old, new) – replaces the first occurrence of a substring
console.log(name.replace("Alice", "Grace")); // Output: "  Grace  Wanjiku"

// 10. .length – returns the total number of characters (including spaces)
console.log(name.length); // Output: 17

// 11. .charAt(index) – returns the character at a specific position
console.log(name.charAt(5)); // Output: "e"

// 12. .split(separator) – splits the string into an array
console.log(name.trim().split(" ")); // Output: ["Alice", "Wanjiku"]

// 13. .startsWith(substring) – checks if the string starts with a certain value
console.log(name.trim().startsWith("Alice")); // Output: true

// 14. .endsWith(substring) – checks if the string ends with a certain value
console.log(name.trim().endsWith("Wanjiku")); // Output: true

// 15. .repeat(n) – repeats the string n times
console.log(name.repeat(2)); // Output: "Alice  WanjikuAlice  Wanjiku"



// Assignment:
// Welcome, Diana Karanja!
// Email: dianakaranja@email.com
// Course: INTRODUCTION TO CODING
// Your email address has 25 characters.

// First name: Diana
// Updated course: Introduction to JavaScript
// Initials: D.K.


// Solution solution3a.js