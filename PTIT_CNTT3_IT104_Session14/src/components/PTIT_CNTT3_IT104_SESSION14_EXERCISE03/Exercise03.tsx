import React, { Component } from 'react'
type InitialState = {
    company : string;
};

export default class Exercise03 extends Component<{}, InitialState> {
    constructor (props: {}) {
        super(props);
        this.state = {
            company : "Rikkei Academy"
        };
    }
    changeCompany = () => {
        this.setState({ company: "RikkeiSoft" });
    }
  render() {
    return (
      <div>
        <p>Công ty: {this.state.company}</p>
        <button onClick={this.changeCompany}>Change</button>
      </div>
    )
  }
}
