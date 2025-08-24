import React, { Component } from "react";

type State = {
  gender: string;
  submitGender: string; 
};

export default class Exercise06 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      gender: "",
      submitGender: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ submitGender: this.state.gender });
  };

  render() {
    return (
      <div>
        <h2> Giới tính :{this.state.submitGender}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="radio"
              name="gender"
              value="Nam"
              checked={this.state.gender === "Nam"}
              onChange={this.handleChange}
            />
            Nam
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Nữ"
              checked={this.state.gender === "Nữ"}
              onChange={this.handleChange}
            />
            Nữ
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Khác"
              checked={this.state.gender === "Khác"}
              onChange={this.handleChange}
            />
            Khác
          </label>
          <br />

          <button type="submit">
            Submit
          </button>
        </form>

        
      </div>
    );
  }
}
