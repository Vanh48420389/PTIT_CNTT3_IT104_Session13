import React, { Component } from 'react'
type InitialState = {
    fullName: string;
    }
export default class Lifecycle extends Component<{}, InitialState> {
    constructor(props:{}) {
        super(props);
        this.state ={
            fullName : 'Nguyễn Văn A',
        }
    }
    componentDidMount() : void {
        console.log('componentDidMount: Component đã được mount vào DOM');
            // thường dùng để gọi API lấy dữ liệu để gắn vào  DOM


    }
    changeName = () => {
        this.setState({
            fullName: 'Nguyễn Văn B'
        })
    }
    componentDidUpdate(prevProps: {}, prevState: InitialState): void {
        console.log('componentDidUpdate: Component đã được cập nhật');
        // thường dùng để cập nhật lại DOM khi state hoặc props thay đổi
    }
    componentWillUnmount(): void {
        console.log('componentWillUnmount: Component sẽ bị unmount khỏi DOM');
        // thường dùng để dọn dẹp các sự kiện, timer, hoặc các tài nguyên khác
    }    
  render() {
    console.log("component render lan dau");
    return (
      <div>
        vòng đời một class component
        {/* <ul>
            1 vòng đời của một component bao gồm 3 giai đoạn:
          1. Mounting (Khởi tạo cóntructor, state, hiện thị dom ra giao diện)
            +componentDidMount ()
          2.componentDidUpdate (khi props hoặc state thay đổi)
          3.componentWillUnmount
        </ul> */}
        <p>Ho va ten : {this.state.fullName}</p>
        <button onClick={this.changeName}>click</button>
      </div>
    )
  }
}
