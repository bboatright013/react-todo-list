import React from 'react';

const Todo = ({dltTodo, task, id}) => {
    const handleDelete = evt => {
        dltTodo(id);
    }

    return (
        <li className="Todo" id={id}>
            <span className="DeleteButton" onClick={handleDelete}>X</span>
            <span className="TodoMessage">{task}</span>
        </li>
    )
}

export default Todo;