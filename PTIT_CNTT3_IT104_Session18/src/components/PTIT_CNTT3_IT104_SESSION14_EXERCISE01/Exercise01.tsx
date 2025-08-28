import React, { useReducer } from 'react';

export default function Exercise01() {
  const initialState = { count: 0 };

  const counterReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'INCREASE':
        return { count: state.count + 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increase = () => {
    dispatch({ type: 'INCREASE' });
  };

  return (
    <div>
      <p>Giá trị hiện tại: {state.count}</p>
      <button onClick={increase}>Tăng</button>
    </div>
  );
}
