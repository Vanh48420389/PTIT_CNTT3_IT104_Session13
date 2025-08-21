import React, { Component } from 'react'
import Child from './Child'

type Exercise05State = {
    id: number;
    productName: string;
    price: number;
    quantity: number;
}

export default class Exercise05 extends Component<{}, Exercise05State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            id: 1,
            productName: 'Bưởi ba rọi',
            price: 12.000,
            quantity: 10
        }
    }
    
  render() {
    return (
      <div>
        <Child 
          id={this.state.id} 
          productName={this.state.productName} 
          price={this.state.price} 
          quantity={this.state.quantity}>
        </Child>
      </div>
    )
  }
}
