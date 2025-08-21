import React, { Component, type ChangeEvent } from 'react';

interface State {
  inputValue: string;
}

export default class Exercise10 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div>
        <h2> Dữ liệu : {this.state.inputValue}</h2>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
