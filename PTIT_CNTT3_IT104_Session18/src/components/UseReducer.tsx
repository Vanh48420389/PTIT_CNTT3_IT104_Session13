import React from 'react'
import { useReducer } from 'react'

export default function UseReducer() {
    const initialState = { count: 0 };

    const counterReducer =(state :any, action : any)=>{
        console.log("action: ", action);
        if(action.type === "increase"){
            return {count: state.count + action.payload};
        }else if(action.type === "decrease"){
            return {count: state.count - state.payload};
        }
        return state;
        
    }

    const [state, dispatch] = useReducer(counterReducer, initialState);

    const increase = () => {
        dispatch({type: "increase", payload: 3});
    }

    const decrease = () => {
        dispatch({type: "decrease", payLoad: 2} );

    }
  return (
    <div>
        <h1>UseReducer</h1>
        <p>{state.count}</p>
        <button onClick={increase}>tang</button>
        <button onClick={decrease}>giam</button>

      
    </div>
  )
}
