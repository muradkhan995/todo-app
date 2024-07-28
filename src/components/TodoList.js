import React from 'react';

const TodoList = ({ todos, onToggle, onDelete }) => (
  <ul>
    {todos.map((todo) => (
      <li
        key={todo.id}
        className={`flex items-center justify-between p-4 mb-3 rounded shadow-lg ${
          todo.priority === 'very important'
            ? 'bg-red-100 border-l-4 border-red-500'
            : todo.priority === 'important'
            ? 'bg-yellow-100 border-l-4 border-yellow-500'
            : 'bg-green-100 border-l-4 border-green-500'
        }`}
      >
        <div>
          <h3 className={`font-semibold ${todo.completed ? 'line-through' : ''}`}>
            {todo.task}
          </h3>
          <p className="text-sm text-gray-600">
            {new Date(todo.datetime).toLocaleString()}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onToggle(todo.id)}
            className="text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 transition"
          >
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button className="text-white bg-gray-600 px-3 py-1 rounded hover:bg-gray-700 transition">
            Edit
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="text-white bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </li>
    ))}
  </ul>
);

export default TodoList;
