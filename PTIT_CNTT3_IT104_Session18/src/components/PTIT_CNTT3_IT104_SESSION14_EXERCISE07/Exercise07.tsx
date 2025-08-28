import React, { useReducer, useEffect, useState } from "react";

interface Todo {
  id: number;
  name: string;
}

const initialState: Todo[] = [];

function todoReducer(state: Todo[], action: { type: string; payload: any }) {
  switch (action.type) {
    case "SET_TODOS": 
      return action.payload;

    case "ADDTODO": 
      const newTodos = [...state, action.payload];
      localStorage.setItem("todo", JSON.stringify(newTodos));
      return newTodos;

    default:
      return state;
  }
}

export default function Exercise07() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const [job, setJob] = useState("");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todo") || "[]");
    dispatch({ type: "SETTODO", payload: savedTodos });
  }, []);

  const handleAddTodo = () => {
    if (job.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      name: job,
    };

    dispatch({ type: "ADDTODO", payload: newTodo });
    setJob(""); 
  };

  return (
    <div>
      <input
        type="text"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button onClick={handleAddTodo}>Thêm</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
}
