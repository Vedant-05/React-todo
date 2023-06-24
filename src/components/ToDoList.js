import {React,useState} from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

function ToDoList()
{    
    const [todos,setTodos] = useState([]);

    const addTodo = (todo)=>{
        
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
          }

          setTodos([todo,...todos]);
    }
    const updateTodo = (todoId,newValue)=>{
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
          }
        setTodos(todo => todo.map(item=>(item.id === todoId?newValue:item)));  
    }
    const removeTodo = (todoId) => {
        const remoArr = [...todos].filter(todo => todo.id!== todoId);
        setTodos(remoArr);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        });
        setTodos(updatedTodos);
      };
    
    return (
        <>
        <h1>Whats Your Plan For Today??</h1>
         <ToDoForm onSubmit={addTodo}/>   
         <ToDo todos={todos} completeTodo={completeTodo} updateTodo={updateTodo} removeTodo={removeTodo}/>     
        </>
    )
}

export default ToDoList;