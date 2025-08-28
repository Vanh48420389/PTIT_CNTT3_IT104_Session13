// import React from 'react'
// import { useReducer } from 'react'

// type Jobs = { 
//     id: number, 
//     name: string,
//     completed: boolean,

// }

// export default function Todo() {
//     const initialJob = {
//         jobs:[
//             {id: 1, name: "Di choi", completed: false},
//             {id: 2, name: "Di hoc", completed: false},
//             {id: 3, name: "Di lam", completed: true},
//         ],

//         taskName:""
//     }

//     const todoReducer = (state: any, action: any) => {
//         switch(action.type){
//             case "ADD":
//                 return{jobs:[...state.jobs,action.payLoad]}

//             case "DELETE":
//                 return {jobs:state.jobs.filter((item=>Job))}

//                 break;
            
//             default:
//                 return state;

//         }
//     }

//     const [state, dispatch] = useReducer(todoReducer, initialJob);

//     const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
//         state.taskName = e.target.value;        
//     }

//     const addTodo=()=>{
//         let newJob ={
//             id:state.jobs.length+1,
//             name:state.taskName,
//             completed:"",
//         }
//         dispatch({type :"ADD", payLoad:"cong viec moi"})
//     }

//     const deleteJob = (id: number)=>{
//         dispacth
//     }
//   return (
//     <div>
//       <h1>Todo</h1>
//         <input type="text" 
//         placeholder='Nhap ten cong viec'
//         onChange={handleChange}
//         />
//         <button onClick={addTodo}>Them cong viec</button>
//         <h2>Danh sacsh cong viec</h2>
//         {
//             state.jobs.map((item : Jobs, index : number) => {
//                 return (
//                     <li>
//                         {item.name}
//                         <button onClick={}>xoa</button>
//                         <button>hoan thanh</button>
//                     </li>
//                 )

//             })}
//     </div>
//     )
// }
