import React, { Component } from 'react'
type PropTypes = {
    fullName: string;
}
export default class Child extends Component<PropTypes> {
  render() {
        console.log('Parents render', this.props);

    return (
      <div>
        Class con 
      </div>
    )
  }
}
