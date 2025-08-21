import React, { Component } from "react";

interface State {
  companyName: string;
}

class UpdateState extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      companyName: "Rikkei Academy",
    };
  }

  handleChange = () => {
    this.setState({
      companyName: "Rikkei Soft",
    });
  };

  render() {
    return (
      <div >
        <h2>Tên công ty: {this.state.companyName}</h2>
        <button onClick={this.handleChange}>Change</button>
      </div>
    );
  }
}

export default UpdateState;
