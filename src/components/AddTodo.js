import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [priority, setPriority] = useState('normal');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAdd({ task, date, time, priority });
      setTask('');
      setDate('');
      setTime('');
      setPriority('normal');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mb-6 space-y-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="p-3 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
        placeholder="Add a new task"
      />
      <div className="flex space-x-4">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-3 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="p-3 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="bg-gray-300 p-3 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        <option value="normal">Normal</option>
        <option value="important">Important</option>
        <option value="very important">Very Important</option>
      </select>
      <button type="submit" className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
