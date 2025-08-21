import React, { Component } from 'react'
type Task = {
    id: number;
    name: string;
    isCompleted: boolean;
}
type StateType = {
    taskName: string;
    todo: Task[];
    fullName: string;
    isActive: boolean;
}

export default class State extends Component<{}, StateType> {
    constructor(props:{}){
        super(props);
        this.state = {
            taskName: 'Hoc ve ReactJS',
            todo :[
                { id: 1, name: 'Hoc ve JSX', isCompleted: false },
                { id: 2, name: 'Hoc ve Props', isCompleted: true },
            ],
            fullName: 'Ha Nam',
            isActive: true,
        }
    }
  render() {
    return (
      <div>
        Hoc ve state 
        <p>Ten sinh vien : {this.state.fullName}</p>
        <p>{this.state.isActive? "hoat dong" : "khong hoat dong"}</p>
        <p>Ten cong viec : {this.state.taskName}</p>
        <ul>
            {this.state.todo.map((key) => (
                <li key={key.id}>
                    {key.name} - {key.isCompleted ? "Da hoan thanh" : "Chua hoan thanh"}
                </li>
            )
            )}

            
        </ul>
      </div>
    )
  }
}
