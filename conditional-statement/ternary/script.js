//Write a ternary expression to check if a number is even or odd.
let num = 9
let message = num%2 == 0 ? "num is even" : "num is odd" 
console.log(message)

//Use the ternary operator to find the maximum between two numbers.
let num1 = 3 
let num2 = 9
let ans = num1>num2 ? "num 1 is greater" : "num 2 is greater"
console.log(ans)

//Write a ternary expression to check if a person is eligible to vote (age ≥ 18).
let age = 18
let eligibility = age>18 ? "not eligible" : "eligible"
console.log(eligibility)

//Use the ternary operator to find the absolute value of a number.
let value = -9;
let absoluteValue = value < 0 ? -value : value;
console.log(absoluteValue);

//Write a ternary expression to assign grades based on marks:
//marks >= 90 → "A"
//marks >= 75 → "B"
//marks >= 50 → "C"
//Otherwise → "Fail"
let marks = 95;
let grade = marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 50 ? "C" : "Fail";
console.log(grade);

// Use a nested ternary operator to find the smallest of three numbers.
let a = 10, b = 5, c = 15;
let smallest = (a < b && a < c) ? a : (b < c) ? b : c;
console.log(smallest);

// Write a ternary expression to check if a year is a leap year.
let year = 2024;
let LeapYear = year % 4 === 0 ? "Leap Year" : "Not a Leap Year";
console.log(LeapYear);

// Use the ternary operator to determine whether a given character is a vowel or consonant.
let char = 'e';
let isVowel = ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase()) ? "Vowel" : "Consonant";
console.log(isVowel);

// Implement a ternary operator that checks if a number is positive, negative, or zero.
let numtocheck = -5;
let numType = numtocheck > 0 ? "Positive" : numtocheck < 0 ? "Negative" : "Zero";
console.log(numType);

// Convert a given numerical day (1-7) into a string representing the day of the week using the ternary operator.
let day = 3;
let dayOfWeek = day === 1 ? "Sunday" : day === 2 ? "Monday" : day === 3 ? "Tuesday" : day === 4 ? "Wednesday" : day === 5 ? "Thursday" : day === 6 ? "Friday" : day === 7 ? "Saturday" : "Invalid day";
console.log(dayOfWeek);
