import { connectDB, disconnectDB } from '../db/connectDB.js';
import Todos from '../schema/TodoSchema.js';
import chalk from 'chalk';
import ora from 'ora';


// Logic for reading tasks 

export default async function readTask() {
  try{
    // Connecting to the database
    await connectDB();
    
    // Starting the spinner
    const spinner = ora('Fetching all todos...').start();

    // fetching all the todos from the database
    const todos = await Todos.find({});

    // stopping the spinner
    spinner.stop();

    // check if todos exist or not
    if(todos.length === 0){
      console.log(chalk.blueBright('You do not have any tasks yet!'))
    }
    else {
      // Listing out each todo with following information
      todos.forEach(todo => {
        console.log(
          chalk.cyanBright('Todo Code: ') + todo.code + '\n' +
          chalk.magentaBright('Name: ') + todo.name + '\n' + 
          chalk.blueBright('Description: ') + todo.detail + '\n' +
          chalk.rgb(255, 136, 0)('Status: ') + todo.status + '\n'
        )
      })
    }
    // disconnect from the database
    await disconnectDB();
  }
  catch (error) {
    // Error Handling
    console.log('Something went wrong, Error: ', error);
    process.exit(1);
  }
}

// For testing
// readTask();