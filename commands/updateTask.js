import { connectDB, disconnectDB } from '../db/connectDB.js'
import { getTaskCode } from'./deleteTask.js'
import inquirer from 'inquirer'
import Todos from '../schema/TodoSchema.js'
import ora from 'ora'
import chalk from 'chalk'

// Prompt user to enter to update the specified values of todo function

async function askUpdateQ(todo){
  try{
    // Prompting to update the following todo data
    const update = await inquirer.prompt([
      {name: 'name', message: 'Update the name of the task?', type: 'input', default: todo.name},
      {name: 'detail', message: 'Update the Description? ', type: 'input', default: todo.detail},
      {name: 'status', message: 'Update the status', type: 'list', choices: ['pending', 'completed'],}
    ])
    // Return the response
    return update
  }
  catch (error) {
    console.log('Something went wrong ... \n', error)
  }
}


export default async function updateTask(){
  try{
    // Getting task code entered by user by calling getTaskCode() method from deleteTask.js export modoule
    const userCode = await getTaskCode();

    // Connect to the database
    await connectDB();

    // Starting the spinner while grabbing todo
    const spinner = ora('Finding the todo...').start()

    

  }
  catch (error){
    // Error Handling
    console.log('Something went wrong, Error: ', error)
    process.exit(1)
  }
}