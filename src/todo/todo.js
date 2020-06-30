import React from 'react';
import { Checkbox, IconButton, ListItem, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'

function Todo({ todo, toggleComplete, removeTodo }) {
    function handleCheckbox() {
        toggleComplete(todo.id)
    }

    function handleRemove() {
        removeTodo(todo.id)
    }

    return (
        <ListItem style={{ display: "flex" }}>
            <Checkbox
                checked={todo.completed}
                type="checkbox" 
                onClick={handleCheckbox} 
            />
            <Typography
                variant="body1"
                style={{
                    textDeocration: todo.complted ? "line-through" : null
                }}
            >{todo.task}</Typography>
            <IconButton onClick={handleRemove}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    )
}

export default Todo;