import React, { Component } from 'react'
import Child from './Child'

export default class Parents extends Component {
  render() {
    return (
      <div>
        <Child fullName='Ha Nam'></Child>
        
      </div>
    )
  }
}
