import React, { Component } from 'react'
type PropTypes = {
    fullName: string;
}
export default class Exercise01 extends Component<{}, PropTypes> {
    constructor(props: {}) {
        super(props);
        this.state = {
            fullName: 'Doan Viet Anh'
        }
    }
  render() {
    return (
      <div>
        <p>Họ và tên: {this.state.fullName}</p>
      </div>
    )
  }
}
