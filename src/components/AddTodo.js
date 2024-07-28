import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAdd(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-grow p-2 border rounded"
        placeholder="Add a new task"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
