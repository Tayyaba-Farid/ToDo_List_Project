#! /usr/bin/env node
import inquirer from "inquirer";

let todos = [];
let condition = true;
while (condition) {
  let addinList = await inquirer.prompt([
    {
      name: "todo",
      message: "what do you want to add in your Todos list?",
      type: "input",
    },
    {
      name: "addMore",
      message: "are you sure you want to add more in Todos list?",
      type: "confirm",
      default: false,
    },
  ]);
  todos.push(addinList.todo);
  condition = addinList.addMore
 console.log(todos);
}