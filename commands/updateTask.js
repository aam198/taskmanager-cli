import { connectDB, disconnectDB } from '../db/connectDB.js'
import { getTaskCode } from'./deleteTask.js'
import inquirer from 'inquirer'
import Todos from '../schema/TodoSchema.js'
import ora from 'ora'
import chalk from 'chalk'

// Prompt user to enter to update the specified values of todo function