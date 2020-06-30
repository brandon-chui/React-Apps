import React, { useState, useEffect } from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';
import { Typography } from '@material-ui/core';

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function TodosComponent() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // fires when app component mounts to the DOM
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTodos) {
            setTodos(storageTodos);
        }
    }, []);

    useEffect(() => {
        // fires when todos array gets updated
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function addTodo(todo) {
        setTodos([todo, ...todos])
    }

    function toggleComplete(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        )
    }
    
    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className='todo'>
            <Typography variant="h3" style={{ padding: 16}}>
                React Todo
            </Typography>
            <TodoForm addTodo={addTodo} />
            <TodoList 
                todos={todos} 
                toggleComplete={toggleComplete}
                removeTodo={removeTodo}    
            />
        </div>
    )
}

export default TodosComponent;