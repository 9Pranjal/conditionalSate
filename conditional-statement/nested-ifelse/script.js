// Write a program to check if a number is positive, negative, or zero.

    let num = prompt("enter num : ")
    
    if (num > 0) {
        console.log("positive number")
    } else {
        if (num < 0) {
            console.log("negative number")
        } else {
            console.log("zero")
        }
    }
    
// Write a program to determine whether a given year is a leap year or not.

let year = prompt("enter a year : ")

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(year + " is  leap year")
        } 
        else {
            console.log(year + " is  leap year")
        }
    } 
    else {
        console.log(year + " is  leap year")
    }
} 
else {
    console.log(year + " is not a leap year")
}


// Write a program to classify a person's age group: Child (0-12), Teen (13-19), Adult (20+).

    let age = prompt("enter your age : ")
    if(age >= 0 && age <=200){
        if(age <= 12){
            console.log("person is child")
        }
        else if(age >= 20){
            console.log("person is adult")
        }
        else{
            console.log("person is teen")
        }
    }
    else{
        console.log("enter valid age")
    }
    

// Write a program to check if a triangle is equilateral, isosceles, or scalene.

    let side1 = prompt("length of side 1 : ")
    let side2 = prompt("length of side 2 : ")
    let side3 = prompt("length of side 3 : ")

    if (side1 == side2 && side2 == side3) {
        console.log("triangle is equilateral")
    } 
    else {
        if (side1 === side2 || side1 === side3 || side2 === side3) {
            console.log("triangle is Iiosceles")
        } 
        else {
            console.log("triangle is scalene")
        }
    }


// Write a program to check if a student has passed, failed, or got distinction based on marks.

let marks = prompt("enter your marks : ")

if (marks >= 0 && marks <= 100) {
    if (marks >= 75) {
        console.log("distinction")
    } 
    else {
        if (marks >= 40) {
            console.log("pass")
        } 
        else {
            console.log("fail")
        }
    }
} 
else {
    console.log("invalid marks");
}

// Write a program to determine whether a character is uppercase, lowercase, or a digit.

let char = prompt("enter char : ") 

if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
    if (char >= 'A' && char <= 'Z') {
        console.log("uppercase")
    } 
    else {
        if(char >= 'a' && char <= 'z') {
            console.log("lowercase")
        } 
        else{
            console.log("digit")
        }
    }
} 
else {
    console.log("invalid input")
}

// Write a program to check whether a number is divisible by both 3 and 5, only 3, or only 5.

let number = prompt("enter number : ") 

if (number % 3 === 0 || number % 5 === 0) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("number is divisible by both 3 and 5");
    }
    else {
        if (number % 3 === 0) {
            console.log("number is divisible by 3");
        } 
        else {
            console.log("number is divisible by 5");
        }
    }
} 
else {
    console.log("number is not divisible by 3 or 5");
}

// Write a program to determine the largest of three numbers.

let num1=prompt("enter the 1st number : ")
let num2=prompt("enter the 2nd number : ")
let num3=prompt("enter the 3rd number : ")

if (num1 >= num2) {
    if (num1 >= num3) {
        console.log(num1 + " is largest number")
    } 
    else {
        console.log(num3 + " is largest number")
    }
} 
else {
    if (num2 >= num3) {
        console.log(num2 + " is largest number")
    } 
    else {
        console.log(num3 + " is largest number")
    }
}

// Write a program to check the grade of a student based on their marks: A (90+), B (80-89), C (70-79), D (60-69), Fail (<60).

let sMarks = prompt("enter marks : ")

if (sMarks >= 90) {
    console.log("grade: a")
} 
else {
    if (sMarks >= 80) {
        console.log("grade: b")
    } 
    else {
        if (sMarks >= 70) {
            console.log("grade: c")
        } 
        else {
            if (sMarks >= 60) {
                console.log("grade: d")
            } 
            else {
                console.log("fail")
            }
        }
    }
}

// Write a program to check if a person is eligible for a loan based on income and credit score.

let income = prompt("enter your income : ") 
let creditScore = prompt("enter your credit score : ")

if (income >= 40000) {
    if(creditScore >= 650) {
        console.log("eligible for loan")
    } 
    else{
        console.log("not eligible for loan")
    }
} else {
    if(creditScore >= 650) {
        console.log("not eligible for loan")
    } 
    else {
        console.log("not eligible for loan")
    }
}
