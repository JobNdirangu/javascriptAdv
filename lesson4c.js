// if else if else 
let grade = 85; 
if (grade >= 90) { 
console.log("A"); 
} else if (grade >= 80) { 
console.log("B"); 
} else { 
console.log("C or below"); 
} 


// assignment: Checks if it is positive, negative, or zero. 

// let num = 5 
// if (num > 0) { 
//   console.log("Positive"); 
// } else if (num < 0) { 
//   console.log("Negative"); 
// } else { 
//   console.log("Zero"); 
// } 


// Assignment
// Marks for 3 subjects
let math = 95;
let english = 85;
let science = 80;

// Attendance
let attendance = 78;

// Calculate total and average
let total = math + english + science;
let average = total / 3;

// Grade logic with attendance check
if (attendance < 75) {
    console.log("Fail due to low attendance");
} else if (average >= 90) {
    console.log("Grade: A");
} else if (average >= 80) {
    console.log("Grade: B");
} else if (average >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}
