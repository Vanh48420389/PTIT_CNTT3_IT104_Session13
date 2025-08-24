import React, { Component } from 'react'


export default class Exercise02 extends Component {
    constructor(props: {}) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
            console.log("Component đã được mount!");
            
        };
  render() {

    return (
      <div>
        <p>Hiển thị thông báo "Component đã được mount!" lên màn hình console khi component được mount lần đầu tiên.</p>
      </div>
    )
  }
}
