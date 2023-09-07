import inquirer from "inquirer";
import Todos from '../schema/TodoSchema.js';
import { connectDB, disconnectDB } from '../db/connectDB.js';
import ora from 'ora';
import chalk from 'chalk';
import { get } from "mongoose";


export async function getTaskCode(){
  try {
    // Prompt user to enter code of todo they want to delete with inquirer
    const answers = await inquirer.prompt([
      {name: 'code', 'message': 'Enter the code of the todo: ', type: 'input'},
    ])
    // Triming user's response so that the todo code does not contain starting or trailing white spaces
    answers.code = answers.code.trim();
    
    // Return so deleteTask can use it 
    return answers;
  }
  catch (error){
    console.log('Something went wrong...\n', error)
  }
}


// To delete the task

export default async function deleteTask(){
  try{
    // Obtaining the todo code that was provided by user from function above and assigning the Object to userCode variable
    const userCode = await getTaskCode()

    // Connect to DB
    await connectDB();

    // Starting the spinner
    const spinner = ora('Finding and Deleting the todo..').start();

    // Deleting the task
    const response = await Todos.deleteOne({code: userCode.code})

    // Stopping the spinner
    spinner.stop()

    // Checking the delete operation
    if(response.deletedCount === 0){
      console.log(chalk.redBright('Could not find any todo matching the provided name. Deletion failed.'))
    } else {
      console.log(chalk.greenBright('Succesfully deleted task'))
    }

    // Disconnecting from the database
    await disconnectDB()
  }
  catch (error) {
    // Error Handling
    console.log('Something went wrong, Error: ', error)
    process.exit(1)
  }
}


deleteTask()