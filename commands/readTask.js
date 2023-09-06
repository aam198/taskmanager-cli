import { connectDB, disconnectDB } from './db/connectDB.js';
import Todos from '../schema/TodoSchema.js';
import chalk from 'chalk';
import ora from 'ora'


// Logic for reading tasks 

export default async function readTask() {
  try{
    // Connecting to the database
    await connectDB();
    
    // Starting the spinner
    const spinner = ora('Fetching all todos...').start();

    // fetching all the todos from the database
    const todos = await Todos.findOne({});

    // stopping the spinner
    spinner.stop();
  }
  catch (error) {
    // Error Handling
    console.log('Something went wrong, Error: ', error);
    process.exit(1);
  }
}