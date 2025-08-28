import React, { useReducer } from "react";

export default function Exercise05() {
  const initialState = { text: "" };

  const textReducer = (
    state: { text: string },
    action: { type: string; payload: string }
  ) => {
    switch (action.type) {
      case "SET_TEXT":
        return { text: action.payload || "" };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(textReducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_TEXT", payload: e.target.value });
  };

  return (
    <div>
      <h1>{state.text}</h1>
      <input
        type="text"
        value={state.text}
        onChange={handleChange}
      />
    </div>
  );
}
