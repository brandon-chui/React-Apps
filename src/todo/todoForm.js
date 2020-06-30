import React, { useState } from 'react';
import { v4 as uuidv4} from 'uuid';
import { Button, TextField } from '@material-ui/core';

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false,
    })

    function handleInputChange(e) {
        setTodo({...todo, task: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo, id: uuidv4() })
            setTodo({ ...todo, task: "" })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Task" 
                onChange={handleInputChange}
                name="task"
                value={todo.task}
                type="text"
            />
            <Button type="submit" style={{ verticalAlign: 'bottom'}}>
                submit
            </Button>
        </form>
    )
}

export default TodoForm;