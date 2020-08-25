import React, { useState, useEffect } from 'react';
import TodoList from './todoList';
import TodoForm from './todoForm';

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function PracticeTodoComponent() {

    const [todos, setTodos] = useState([])
    console.log(todos)

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
            todos.mat(todo => {
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
        <section>
            <TodoForm addTodo={addTodo} />
            <TodoList 
                todos={todos} 
                toggleComplete={toggleComplete}
                removeTodo={removeTodo}
            />
        </section>
    )
}

export default PracticeTodoComponent;