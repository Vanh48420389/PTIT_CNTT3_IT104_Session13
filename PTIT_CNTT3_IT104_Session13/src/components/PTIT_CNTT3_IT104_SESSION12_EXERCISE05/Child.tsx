import React, { Component } from 'react'
type ChildPropTypes = {
    id: number;
    productName: string;
    price: number;
    quantity: number;
}

export default class Child extends Component<ChildPropTypes> {
  render() {
    return (
      <div>
        <h2>Dữ liệu trong component con là :</h2>
        <p>ID: {this.props.id}</p>
        <p>Tên sản phẩm: {this.props.productName}</p>
        <p>Giá: {this.props.price}</p>
        <p>Số lượng: {this.props.quantity}</p>
        
      </div>
    )
  }
}
