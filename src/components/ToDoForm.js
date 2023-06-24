import {React,useState} from 'react';



function ToDoForm(props){
  
    const [input,setInput] = useState("");

    function handelChange(e){
        setInput(e.target.value);
    }
    const handelSubmit = (e) =>{
        e.preventDefault();

        props.onSubmit({id: Math.floor(Math.random()*10000),text : input});

        setInput('');

    }

    return(
        <div>

            <form onSubmit={handelSubmit} className='todo-form'>
            <input placeholder='Your To Do List' className='todo-input' value={input} name="text" onChange={handelChange}/>
           <button className='todo-button'>Add Todo {":)"}</button>            

            </form>
        </div>
    )
}

export default ToDoForm;








