
let rawName = "   diana karanja  ";
let rawEmail = "DianaKaranja@Email.com   ";
let course = "Introduction to coding";
let age1 = 17;

// Step 1: Clean the Data
let nameTrimmed = rawName.trim(); // Remove leading/trailing spaces
let emailTrimmed = rawEmail.trim().toLowerCase(); // Trim and convert to lowercase


// Capitalize first letter of each name
let nameParts = nameTrimmed.split(" ");

let formattedName = nameParts
  .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
  .join(" ");

    console.log(`Welcome: ${formattedName}.`);
    console.log(`Email: ${emailTrimmed}.`);

// 2. initials (e.g., "D.K.")
let initials = nameParts.map(n => n.charAt(0).toUpperCase());

// 3 Course Name in Uppercase
let courseUpper = course.toUpperCase();

// 1. Extract the first name
let firstName = formattedName.split(" ")[0];
console.log(`First name: ${firstName}`);

// 2. Replace "coding" with "JavaScript"
let updatedCourse = course.replace("coding", "JavaScript");
console.log(`Updated course: ${updatedCourse}`);

// 3. Print initials (e.g., "D.K.")
let initialsl = nameParts.map(n => n.charAt(0).toUpperCase()).join(".");
console.log(`Initials: ${initialsl}.`);
