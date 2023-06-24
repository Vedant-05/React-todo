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
    return (
        <>
         <ToDoForm onSubmit={addTodo}/>   
         <ToDo todos={todos} />     
        </>
    )
}

export default ToDoList;