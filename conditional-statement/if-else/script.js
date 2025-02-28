// 1 Write a program to check if a number is even or odd.

    let number = prompt("enter number : ")
    if(number%2==0){
        console.log(number + " is even")
    }
    else{
        console.log(number + " is odd") 
    }

//2  Write a program to compare two numbers and print the greater one.

    let num1 = prompt("enter number 1: ")
    let num2 = prompt("enter number 2: ")

    if(num1 > num2){
        console.log(num1 + " is greater than " + num2)
    }
    else{
        console.log(num2 + " is greater than " + num1)
    }

//3  Write a program to check if a character is a vowel or consonant.

    let char = prompt("enter char : ")

    if(char=='a'|| char=='e'|| char=='i'|| char=='o'|| char=='u' || 
       char=='A'|| char=='E'|| char=='I'|| char=='O'|| char=='U'){
        console.log(char + " is vowel ")
    }
    else{
        console.log(char + " is consonant ")
    }

//4 Write a program to check if a user-provided password is correct or incorrect.
    let password = "pranjal" ;

    let enteredPass = prompt("enter the password : ")
    if(password == enteredPass){
        console.log("password is correct");
    }
    else{
        console.log("password is incorrect");
    }

//5 Write a program to check if a person is eligible for a driving license (age ≥ 18).
    let ageDL = prompt("enter your age : ")

    if(ageDL>= 18){
        console.log("you are eligible for driving license")
    }
    else{
        console.log("you are not eligible for driving license")
    }

//6 Write a program to check whether a number is positive or negative.

    let num = prompt("enter num : ")
    if(num>0){
        console.log(num + " is positive")
    }
    else if(num<0){
        console.log(num +' is negative');
    }
    else{
        console.log('its  zero');
    }

//7 Write a program to check if a person is an adult (age ≥ 18) or a minor.
    let age = prompt("enter your age : ")

    if(age>= 18){
        console.log("adult")
    }
    else{
        console.log("minor")
    }


// Write a program to check whether the entered string is empty or not.

    let string = prompt("enter string : ")
    if(string == ''){
        console.log("string is empty")
    }
    else{
        console.log("string is not empty")
    }

// Write a program to print "Pass" if marks are greater than or equal to 40, otherwise "Fail".

    let marks = prompt("enter marks : ")
    if(marks>= 40){
        console.log("pass")
    }
    else{
        console.log("fail")
    }

// Write a program to check if a given day is "Saturday" or not and print "Weekend" if it is.

    let day = prompt("enter day")
    if(day == 'saturday'){
        console.log("weekend")
    }
    else{
        console.log("not a weekend")
    }
