import React, { Component } from 'react'
type InitialState = {
    fullName : string;
};

export default class Exercise01 extends Component<{}, InitialState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            fullName : 'Đoàn Việt Anh',
        };
    }
  render() {
    return (
      <div>
        <p>Họ và tên: {this.state.fullName}</p>        
      </div>
    )
  }
}
