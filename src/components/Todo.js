import React  from 'react';

const Todo = ({todo, toggleComplete, removeTodo}) => {

    const handleCheckboxClick = () => {
        toggleComplete(todo.id);
    }

    const handleRemoveTodo = () => {
        removeTodo(todo.id);
    }

    return (
        <div style={{display: "flex" }}>
            <input type='checkbox' onClick={handleCheckboxClick}/>
            <li style={{
                color: "white",
                textDecoration: todo.completed ? "line-through" : null
            }}>
                {todo.task}
            </li>
            <button onClick={handleRemoveTodo}>X</button>
        </div>
  
    );
}

export default Todo;