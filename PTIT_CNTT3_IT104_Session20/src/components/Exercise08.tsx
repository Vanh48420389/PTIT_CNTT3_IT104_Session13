import React from 'react'
import { useReducer } from 'react'
type State = {
  name: string
  email: string
}

type Action ={
    type : "SETNAME";
    payload : string;
} | {
    type : "SETEMAIL";
    payload : string;
}

const initialState = {
  name: "",
  email: "",
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SETNAME":
      return { ...state, name: action.payload }
    case "SETEMAIL":
      return { ...state, email: action.payload }
    default:
      return state
  }
}

export default function Exercise08() {
    const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div>
      <form action="">
        <h3>User Information Form</h3>
        <label htmlFor="">Name :</label><br />
        <input type="text" name="name" value={state.name} onChange={(e) => dispatch({ type: "SETNAME", payload: e.target.value })} /> <br />
        <label htmlFor="">Email</label><br />
        <input type="text" name="email" value={state.email} onChange={(e) => dispatch({ type: "SETEMAIL", payload: e.target.value })} /> <br />
      </form>
      <form action="">
        <h3>Thông tin người dùng</h3>
        <p>Tên : {state.name}</p>
        <p>Email :{state.email}</p>
      </form>
    </div>
  )
}
