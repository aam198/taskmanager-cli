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
// const output = await input();
// console.log(output);

// Function to ask multiple tasks

