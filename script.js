// This is a javascript file
console.log("Hello World");

// const prompt = require("prompt-sync")()

// Use logical operator to find whether a persons age is between 10 and 15

// var age = parseInt(prompt("Enter your age: "))
age = 18
console.log((age >= 10 && age <= 15)? "You are between 10 and 15" : "You are not between 10 and 15");

// Demonstrate the use of Switch case in JavaScript

var result;
switch (age){
    case (18):
        result = "Congratulations, you can drive!"
        break;
    case (0):
        result = "Don't Joke around bro"
        break;
    default:
        text = "You are kid....Go watch cartoons(!ANIME)"
}
console.log(result);

//Program to find whether a number is divisible by 2 and 3

// var a = parseInt(prompt("Enter a number: "))
a = 10;
if (a%2 == 0 && a%3 == 0) console.log(a, "is divisible by 2 & 3")
else console.log(a, "is not divisible by 2 & 3");

//Program to find whether a number is divisible by either 2 or 3

// var a = parseInt(prompt("Enter a number: "))
a = 30
if (a%2 == 0 || a%3 == 0) console.log(a, "is divisible by either 2 or 3");
else console.log(a, "is not divisible by either 2 or 3");

//Print you can drive or you can't drive using ternary operator (18+)

// var age = parseInt(prompt("Enter your age: "))
console.log("You can", (age<18)? "not drive" : "drive")


