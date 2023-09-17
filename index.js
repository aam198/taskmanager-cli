#!/usr/bin/env node

// Above is shebang to execute with node.js interpreter 

// Importing the required functions for each command
import addTask from './commands/addTask.js'
import deleteTask from './commands/deleteTask.js'
import readTask from './commands/readTask.js'
import updateTask from './commands/updateTask.js'

// Importing the Command class from Commander.js library
import { Command } from 'commander'

// Creating an instance of the Command class
const program = new Command();

// Setting the name and description of the CLI tool
program
// Both description and version can be accessed by flags --help & --version
.name('todo')
.description('Your terminal task manager!')
.version('1.0.0')

// Defining the command called 'add'
program
.command('add')
.description('Create a new todo.')
.action(addTask)

// Defining the command 'read'
program
.command('read')
.description('Reads all the todos.')
.action(readTask)

// Defining the command for 'update'
program
.command('update')
.description('Updates a todo.')
.action(updateTask)

// Defining the command for 'delete'
program
.command('delete')
.description('Deletes a todo.')
.action(deleteTask)

// Parsing the command-line arguments and executing the correstponding action
program.parse()