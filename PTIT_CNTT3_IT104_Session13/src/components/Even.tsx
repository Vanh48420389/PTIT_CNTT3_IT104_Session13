import React, { Component } from 'react'

type InitialState={
    fullName:string
    students:Student[],
    name:string,
}
type Student={
    id:number,
    name:string,
}

export default class Event extends Component<{},InitialState> {
    constructor(props:{}){
        super(props)
        this.state={
            fullName:"Lan Ngọc",
            name:"",
            students:[
              {
                id:1,
                name:"hoa"
              },
               {
                id:2,
                name:"hồng"
              },
               {
                id:3,
                name:"nhung"
              }
            ]
        }
    }
    // Nơi khai báo các hàm
    changeName=()=>{
        console.log("đang gọi event click!");
        this.setState({fullName:"Ngọc Lan"})
        
    }
    handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        console.log("GIÁ TRỊ NGƯỜI DÙNG NHẬP", e.target.value);
        this.setState({name:e.target.value});
        
    }
    addStudent=()=>{
      if(this.state.name){
        let new_student= {
            name:this.state.name,
            id:Math.floor(Math.random()*99999)
        }
        this.setState({
            students: [...this.state.students,new_student]
        })
        this.setState({
            name:""
        })
      }
        
    }
    deleteStudent=(id:number)=>{
        console.log("xóa",id);
        // let result= this.state.students.filter(item=>item.id!=id);
        // this.setState({
        //     students:result
        // })
        let index= this.state.students.findIndex(item=>item.id==id);
        this.state.students.splice(index,1);
        this.setState({
            students: [...this.state.students]
        })
    }
  render() {

    return (
      <div>
        Học về event
        <p>tên sinh viên: {this.state.fullName}</p>
        <button onClick={this.changeName}>changeName</button> <br />
        <input 
         placeholder='nhập tên sinh viên'
         onChange={this.handleChange}
         value={this.state.name}
          />
        <button onClick={this.addStudent}>thêm sinh viên</button>
         <h1> Danh sách sinh viên</h1>
         <ul>
            {this.state.students.map((item,index)=>{
                return <li key={index}> {item.name} <button onClick={()=>this.deleteStudent(item.id)}>Xóa</button> <button>Sửa</button> </li>
            })}
         </ul>
      </div>
    )
  }
}