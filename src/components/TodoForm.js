import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({addTodo}) => {
    let [ todo, setTodo ] = useState({
        id: "",
        task: "",
        completed: false
    });

    const handleTaskInputChange = ((e) => {
        setTodo({...todo, task: e.target.value });
    });

    const handleSubmit = ((e) => {
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo, id: uuidv4()});
            setTodo({...todo, todo:""});
        }
    });

    return (
        <form onSubmit={handleSubmit}>
            <label><h2>Enter your task for todo:</h2></label>
                <input type="text" value={todo.task} onChange={handleTaskInputChange}/>
                <button type="Submit">Add Todo</button>
        </form>
    ); 
}

export default TodoForm;