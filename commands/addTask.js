import inquirer from 'inquirer';
import { connectDB, disconnectDB } from '../db/connectDB.js';
import Todos from '../schema/TodoSchema.js';
import ora from 'ora';
import chalk from 'chalk';

// Gather task's name and details from user

async function input() {
  const answers = await inquirer.prompt([
    { name: 'name', message: 'Please enter name of the task: ', type: 'input' },
    { name: 'detail', message: "Please enter the details of the task: ", type: 'input'}
  ]);
  return answers;
}

// Testing of gathering tasks name. 
// const output1 = await input();
// console.log(output1);


// Function to ask multiple tasks

const askQuestions = async() => {
  const todoArray= [];
  let loop = false;

  do{
    const userRes = await input();
    // Push to todoArray
    todoArray.push(userRes);

    // Once input() function is hit then asks user if there are more tasks
    const confirmQ = await inquirer.prompt([
      {name: 'confirm', message: "Do you want to add more tasks? ", type: 'confirm'}
    ])

    // Statement to break loop as user responds.
    if(confirmQ.confirm){
      loop = true
    } else {
      loop = false
    }
  } while(loop);

  // Return the array of tasks to todoArray
  return todoArray;
  
}

// Testing for multple questions
// const output2 = await askQuestions();
// console.log(output2);