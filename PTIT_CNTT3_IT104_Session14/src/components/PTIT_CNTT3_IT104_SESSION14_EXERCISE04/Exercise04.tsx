import React, { Component } from 'react'
type InitialState = {
    slogan : string;
};

export default class Exercise04 extends Component<{}, InitialState> {
    constructor (props: {}) {
        super(props);
        this.state = {
            slogan : "Học code để đi làm"
        };
    }

    changeSlogan = () => {
        this.setState({ slogan: "Học code sẽ thành công. Cố lên!!!" });
    }

    shouldComponentUpdate(): boolean {
        return false;
    }

    
  render() {
    return (
      <div>
        <p>Slogan: {this.state.slogan}</p>
        <button onClick={this.changeSlogan}>Change state</button>
        
      </div>
    )
  }
}
