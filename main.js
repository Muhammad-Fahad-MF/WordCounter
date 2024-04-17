#! /usr/bin/env node
import inquirer from "inquirer";
console.log("  Word Counter  ");
let sentence = await inquirer.prompt([
    {
        name: "in",
        message: "Enter the Sentence :",
        type: "string"
    }
]);
let count = sentence.in.trim().split(" ");
console.log(`Your sentence contains ${count.length} words`);
