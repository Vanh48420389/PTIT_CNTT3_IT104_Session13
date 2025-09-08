import React, { useState } from "react";

export default function Exercise1() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Code a todo list", completed: true },
    { id: 2, text: "Learn React Typescript", completed: false },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [moveDoneToEnd, setMoveDoneToEnd] = useState(false);

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: inputValue, completed: false },
    ]);
    setInputValue("");
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const sortedTodos = moveDoneToEnd
    ? [...todos].sort((a, b) => Number(a.completed) - Number(b.completed))
    : todos;

  return (
    <div className="bg-[#f9f0f2] flex items-center justify-center min-h-screen p-4">
      <div className="relative w-full max-w-xs bg-[#f25a67] p-6 pt-10 rounded-lg shadow-lg">
        <h1 className="text-white text-3xl font-light mb-1">Todo List</h1>
        <p className="text-[#f7d7db] text-xs font-light mb-6">
          Get things done, one item at a time.
        </p>

        <div className="space-y-4 mb-6">
          {sortedTodos.map((todo) => (
            <div
              key={todo.id}
              className={`flex items-center justify-between text-sm font-light ${
                todo.completed ? "text-[#f7d7db] opacity-60" : "text-white"
              }`}
            >
              <span
                className={`select-none ${
                  todo.completed ? "line-through" : ""
                }`}
              >
                {todo.text}
              </span>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-4 h-4 cursor-pointer accent-[#f25a67]"
                />
                <button
                  aria-label="Delete item"
                  onClick={() => deleteTodo(todo.id)}
                  className="trash-btn text-white opacity-60 hover:opacity-100"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6 text-[#f7d7db] text-xs font-light">
          <span>Move done items at the end?</span>
          <div className="relative">
            <label htmlFor="toggle" className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  id="toggle"
                  type="checkbox"
                  checked={moveDoneToEnd}
                  onChange={() => setMoveDoneToEnd(!moveDoneToEnd)}
                  className="sr-only"
                />
                <div className="block bg-[#f7d7db] w-10 h-5 rounded-full transition"></div>
                <div
                  className={`absolute left-0 top-0 w-5 h-5 bg-white rounded-full flex items-center justify-center text-[#f25a67] text-xs transition-transform duration-300 ${
                    moveDoneToEnd ? "translate-x-5" : "translate-x-0"
                  }`}
                >
                  <i className="fas fa-circle"></i>
                </div>
              </div>
            </label>
          </div>
        </div>

        <form onSubmit={addTodo} className="flex flex-col space-y-2">
          <label
            htmlFor="todo-input"
            className="text-[#f7d7db] text-sm font-light"
          >
            Add to the todo list
          </label>
          <div className="flex space-x-2">
            <input
              id="todo-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter new task..."
              className="flex-grow border border-black bg-white text-black text-sm px-2 py-1 focus:outline-none"
            />
            <button
              type="submit"
              className="text-xs font-semibold text-white uppercase tracking-wider px-3 py-1 bg-[#f25a67] border border-white hover:bg-[#e04e5a] transition-colors"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
