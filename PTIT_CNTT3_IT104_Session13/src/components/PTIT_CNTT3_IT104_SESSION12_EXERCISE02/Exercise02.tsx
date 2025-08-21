import React, { Component } from 'react'
type PropTypes = {
    id: number;
    fullName: string;
    birthday: string;
    address: string;
}

export default class Exercise02 extends Component<{} , PropTypes> {
    constructor(props: {}) {
        super(props);
        this.state = {
            id : 1,
            fullName: 'Doan Viet Anh',
            birthday: '2000-01-01',
            address: 'Ha Noi',
        }
    }
  render() {
    return (
      <div>
        <p>ID: {this.state.id}</p>
        <p>Họ và tên: {this.state.fullName}</p>
        <p>Ngày sinh: {this.state.birthday}</p>
        <p>Địa chỉ: {this.state.address}</p>
        
      </div>
    )
  }
}
