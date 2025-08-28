import React, { useReducer, useEffect, useState } from "react";

interface Todo {
  id: number;
  name: string;
}

const initialState: Todo[] = [];

function todoReducer(state: Todo[], action: { type: string; payload: any }) {
  switch (action.type) {
    case "SETTODOS": 
      return action.payload;

    case "ADDTODO": 
      const newTodos = [...state, action.payload];
      localStorage.setItem("todo", JSON.stringify(newTodos));
      return newTodos;

    case "DELETETODO": 
      const updatedTodos = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todo", JSON.stringify(updatedTodos));
      return updatedTodos;

    default:
      return state;
  }
}

export default function Exercise08() {
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

  const handleDeleteTodo = (id: number) => {
    const confirmDelete = window.confirm("Bạn có muốn xóa công việc này?");
    if (confirmDelete) {
      dispatch({ type: "DELETETODO", payload: id });
    }
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
          <li key={todo.id}>
            {todo.name}
            <button onClick={() => handleDeleteTodo(todo.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
