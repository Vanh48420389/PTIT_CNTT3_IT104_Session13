import React, { Component } from 'react'
import Child_Comp from './Child_Comp'

type ParentPropTypes = {
    fullName: string;
}


export default class Parent_Comp extends Component<{}, ParentPropTypes> {
    constructor(props: ParentPropTypes) {
        super(props);
        this.state = {
            fullName: 'Ha Anh Tu'
        }
    }
  render() {
    return (
      <div>
        <p>Họ và tên cha: {this.state.fullName}</p>
        <Child_Comp fullName={this.state.fullName}></Child_Comp>        
      </div>
    )
  }
}
