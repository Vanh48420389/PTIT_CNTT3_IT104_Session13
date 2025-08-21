import React, { Component } from 'react'
type ChildPropTypes = {
     id : number;
    title : string;
    content : string;
    author : string;
}


export default class Child extends Component<ChildPropTypes> {
  render() {
    return (
      <div>
        <p>ID: {this.props.id}</p>
        <p>Tiêu đề: {this.props.title}</p>
        <p>Nội dung: {this.props.content}</p>
        <p>Tác giả: {this.props.author}</p>
      </div>
    )
  }
}
