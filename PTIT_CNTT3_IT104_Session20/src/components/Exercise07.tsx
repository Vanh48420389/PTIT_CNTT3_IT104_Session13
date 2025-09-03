import React from 'react'
import {  useReducer } from 'react'

type State = {
    count: number
}

type Action = {
    type : "INCREMENT" | "DECREMENT"

}

const InitialState : State ={
    count : 0
}

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

export default function Exercise07() {
    const [state, dispatch] = useReducer(reducer, InitialState)

  return (
    <div>
        <p>Số đếm : {state.count}</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Tăng</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Giảm</button>
      
    </div>
  )
}
