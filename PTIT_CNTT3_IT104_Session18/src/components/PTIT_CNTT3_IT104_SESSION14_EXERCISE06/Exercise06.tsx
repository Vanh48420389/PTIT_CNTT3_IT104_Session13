import React, { useReducer } from "react";

export default function Exercise06() {
  const initialState = {
    gender: "Nam",
  };

  function genderReducer(state: { gender: string }, action: { type: string; payload: string }) {
    if (action.type === "SET_GENDER") {
      return { gender: action.payload || "Nam" };
    }
    return state;
  }

  const [state, dispatch] = useReducer(genderReducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_GENDER", payload: e.target.value });
  };

  return (
    <div>
      <h2>Chọn giới tính</h2>

      <label>
        <input
          type="radio"
          name="gender"
          value="Nam"
          checked={state.gender === "Nam"}
          onChange={handleChange}
        />
        Nam
      </label>
      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="Nữ"
          checked={state.gender === "Nữ"}
          onChange={handleChange}
        />
        Nữ
      </label>
      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="Khác"
          checked={state.gender === "Khác"}
          onChange={handleChange}
        />
        Khác
      </label>

      <h3>Selected gender: {state.gender}</h3>
    </div>
  );
}
