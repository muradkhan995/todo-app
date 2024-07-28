import React from 'react';
import Button from '@mui/material/Button';

const TodoItem = ({ todo, onToggle, onDelete }) => (
  <div className="flex justify-between items-center p-2 mb-2 border rounded">
    <span
      onClick={() => onToggle(todo.id)}
      className={`cursor-pointer ${todo.completed ? 'line-through' : ''}`}
    >
      {todo.task}
    </span>
    <Button variant="contained" color="error" onClick={() => onDelete(todo.id)}>
      Delete
    </Button>
  </div>
);

export default TodoItem;
