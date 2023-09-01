import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

// Blueprint for how each task is created, what information it should have, and how that information is organized.
// Setting the rules for how our tasks are stored in the database.

const TodoSchema = new mongoose.Schema({
  // Title for task
  name: {
    type: String,
    required: true,
    trim: true
  },
  // Description of task
  detail: {
    type: String,
    required: true,
    trim: true
  },
  // Shows if task is done or not
  status: {
    type: String,
    required: true,
    enum: ['completed', 'pending'],
    default: 'pending',
    trim: true
  },
  // ID for task
  code: {
    type: String,
    required: true,
    default: 'code',
    trim: true
  }
}, 
// Configuration option to add timestamp fields createdAt, updatedAt to tasks when created or modified.
{timestamps: true});

// Pre-save hook/function which runs everytime before a task gets saved to update the task with an ID.
TodoSchema.pre('save', function(next){
  this.code = nanoid(10);
  next();
});

// Creating a Todos Model using TodoSchema blueprint and export
const Todos = mongoose.model('Todos', TodoSchema);
export default Todos;