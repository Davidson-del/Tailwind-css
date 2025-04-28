import React, { useEffect } from "react";
import { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleClearAll = () => {
    setTodos([]);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Todo App</h1>
      <div className="gap-2">
        <div className="flex gap-5">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a new todo.."
            className="border border-gray-300 p-2 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Add
          </button>
        </div>
        <div className="w-full h-[50vh] overflow-y-auto py-4">
          <ul className="w-full max-w-md space-y-4">
            {todos.length === 0 ? (
              <div className="w-full h-full flex justify-center text-2xl">Your Todo is empty</div>
            ) : (
              todos.map((todo, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center bg-white p-4 rounded-md shadow-sm"
                >
                  <div
                    onClick={() => handleToggleComplete(todo.id)}
                    className={`cursor-pointer ${
                      todo.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {todo.text}
                  </div>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="text-red-500 hover:text-red-700 font-semibold"
                  >
                    Delete
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
        {todos.length === 0 ? null : (
          <button
            onClick={handleClearAll}
            className="w-max h-max p-3 bg-red-500 text-white rounded-md"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
