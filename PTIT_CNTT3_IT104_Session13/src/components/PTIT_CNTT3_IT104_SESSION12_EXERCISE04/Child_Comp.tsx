import React, { Component } from 'react'

type ChildPropTypes = {
    fullName: string;
}

export default class Child_Comp extends Component<ChildPropTypes> {
    
  render() {
    
    return (
      <div>
        <p>Họ và tên con: {this.props.fullName}</p>
      </div>
    )
  }
}
