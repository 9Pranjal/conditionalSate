// 1. Print the day of the week
let day = 3;
let dayOfWeek;
switch (day) {
    case 1: 
        dayOfWeek = "Sunday";
    break;
    case 2: 
        dayOfWeek = "Monday"; 
    break;
    case 3: 
        dayOfWeek = "Tuesday"; 
    break;
    case 4: 
        dayOfWeek = "Wednesday"; 
    break;
    case 5: 
        dayOfWeek = "Thursday"; 
    break;
    case 6: 
        dayOfWeek = "Friday"; 
    break;
    case 7: 
        dayOfWeek = "Saturday"; 
        break;
    default: 
        dayOfWeek = "Invalid day";
    break;
}
console.log(dayOfWeek);


// 2. Check for vowels

let char = 'e';
let Vowel;
switch (char.toLowerCase()) {
    case 'a': case 'e': case 'i': case 'o': case 'u':
        Vowel = "Vowel";
        break;
    default:
        Vowel = "Not a vowel";
        break;
}
console.log(Vowel);


// 3. Basic arithmetic operations

let a = 10, b = 5;
let operator = '+';
let result;
switch (operator) {
    case '+':
         result = a + b;
    break;
    case '-': 
        result = a - b; 
    break;
    case '*': 
    result = a * b; 
    break;
    case '/': 
        result = b !== 0 ? a / b : "Cannot divide by zero"; 
    break;
    default: 
        result = "Invalid operation";
    break;
}
console.log(result);


// 4. Number of days in a month

let month = 2;
let days;
switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31; 
    break;
    case 4: case 6: case 9: case 11:
        days = 30; 
    break;
    case 2:
        days = "28 or 29"; 
    break;
    default:
        days = "Invalid month";
    break;
}
console.log(days);


// 5. Convert marks into letter grades

let marks = 95;
let grade;
switch (true) {
    case (marks >= 90): 
        grade = "A"; 
    break;
    case (marks >= 80): 
        grade = "B"; 
    break;
    case (marks >= 70): 
        grade = "C"; 
    break;
    case (marks >= 60): 
        grade = "D"; 
    break;
    case (marks >= 0): 
        grade = "F"; 
    break;
    default: 
        grade = "Invalid marks";
    break;
}
console.log(grade);


// 6. Determine character type

let character = 'p';
let charType;
switch (true) {
    case /[A-Z]/.test(character): 
        charType = "Uppercase Letter"; 
    break;
    case /[a-z]/.test(character): 
        charType = "Lowercase Letter"; 
    break;
    case /[0-9]/.test(character): 
        charType = "Digit"; 
    break;
    default: 
        charType = "Special Character";
    break;
}
console.log(charType);


// 7. Convert month to season

let season;
switch (month) {
    case 12: case 1: case 2:
        season = "Winter"; 
    break;
    case 3: case 4: case 5:
        season = "Spring"; 
    break;
    case 6: case 7: case 8:
        season = "Summer"; 
    break;
    case 9: case 10: case 11:
        season = "Autumn"; 
    break;
    default:
        season = "Invalid month";
}
console.log(season);


// 8. ATM menu simulation

let option = "Withdraw";
let atmMessage;
switch (option) {
    case "Withdraw": 
        atmMessage = "Withdrawal"; 
    break;
    case "Deposit": 
        atmMessage = "Deposit"; 
    break;
    case "Check Balance": 
        atmMessage = "Fetching Balance..."; 
    break;
    default: 
        atmMessage = "Invalid Option";
    break;
}
console.log(atmMessage);


// 9. Determine triangle type

let x = 3, y = 3, z = 3;
let triangle;
switch (true) {
    case (x === y && y === z): 
        triangle = "Equilateral Triangle"; 
    break;
    case (x === y || y === z || x === z): 
        triangle = "Isosceles Triangle"; 
    break;
    default: 
        triangle = "Scalene Triangle";
    break;
}
console.log(triangle);


// 10. Extended calculator with more operations

operator = '^';
switch (operator) {
    case '+': 
        result = a + b; 
    break;
    case '-': 
        result = a - b; 
    break;
    case '*': 
        result = a * b; 
    break;
    case '/': 
        result = b !== 0 ? a / b : "Cannot divide by zero"; 
    break;
    case '%': 
        result = a % b; 
    break;
    case '^': 
        result = Math.pow(a, b); 
    break;
    case 'sqrt': 
        result = Math.sqrt(a);
    break;
    default: 
        result = "Invalid operation";
    break;
}
console.log(result);
