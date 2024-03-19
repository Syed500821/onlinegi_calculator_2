#! /usr/bin/env node   


import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message:"Enter first number", type : "number", name: "firstnumber"},
    {message: "Enter 2nd number", type : "number", name: "secondNumber"},
    {
        message: "Select one of the operators to perform action", 
        type : "list", 
        name : "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);

// conditional statement

if(answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondNumber)
} else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondNumber)
}else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondNumber)
} else {
    console.log("Pleasae select valid operator")
}