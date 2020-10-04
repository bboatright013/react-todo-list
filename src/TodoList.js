import React , { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [todoList, setTodoList] = useState([]);

    const addTodo = todo => {
        let newTodo = {...todo, id: uuid()}
        setTodoList(todos => [...todos, newTodo]);
    }

    const dltTodo = (todoId) => {
        const idxToDlt = todoList.findIndex(todo => todo.id === todoId);
        setTodoList(todos => [...todos.slice(0,idxToDlt), ...todos.slice(idxToDlt + 1)])
    }

    return (
        <div className="TodoList">
            <NewTodoForm addTodo={addTodo}/>
            <ul className="todos">
                {todoList.map(todo => {
                    return <Todo dltTodo={dltTodo} id={todo.id} key={todo.id} task={todo.task} />
                })}
            </ul>
        </div>
    )
}

export default TodoList;