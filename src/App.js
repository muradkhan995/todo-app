import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = ({ task, date, time }) => {
    setTodos([...todos, {
      id: Date.now(),
      task,
      completed: false,
      datetime: new Date(`${date}T${time}`)
    }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    const now = new Date();
    if (filter === 'today') {
      const today = new Date().setHours(0, 0, 0, 0);
      return new Date(todo.datetime).setHours(0, 0, 0, 0) === today;
    }
    if (filter === 'pending') return !todo.completed;
    if (filter === 'overdue') return new Date(todo.datetime) < now && !todo.completed;
    return true;
  });

  return (
    <div className="w-full h-screen p-4 bg-gray-100">
      <header className="bg-green-500 text-white text-center py-4 mb-6">
        <h1 className="text-4xl font-bold">To-Do List</h1>
      </header>
      <div className="flex justify-around mb-6">
        <button
          onClick={() => setFilter('today')}
          className={`bg-green-600 text-white px-4 py-2 rounded ${filter === 'today' ? 'bg-blue-400 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
        >
          Today
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`bg-green-600 text-white px-4 py-2 rounded ${filter === 'pending' ? 'bg-blue-400 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
        >
          Pending
        </button>
        <button
          onClick={() => setFilter('overdue')}
          className={`bg-green-600 text-white px-4 py-2 rounded ${filter === 'overdue' ? 'bg-blue-400 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
        >
          Overdue
        </button>
      </div>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
};

export default App;
