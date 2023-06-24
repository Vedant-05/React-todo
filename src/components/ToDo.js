import React, { useState } from 'react';
import ToDoForm from './ToDoForm';


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
 
//   return todos.map((todo) => (<div><div>{todo.text}</div></div>));
  return todos.map((todo)=>(<div>{todo.text}</div>));
}

export default Todo;











