import React, { Component, createRef } from "react";

type Account = {
  name: string;
  email: string;
  password: string;
  address: string;
};

type State = {
  email: string;
  password: string;
  error: string;
};

export default class Exercise08 extends Component<{}, State> {
emailRef = React.createRef<HTMLInputElement>();

  constructor(props: {}) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
    };

    this.emailRef = createRef<HTMLInputElement>();
  }

  componentDidMount() {
    this.emailRef.current?.focus();
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = this.state;

    const accounts: Account[] = JSON.parse(localStorage.getItem("accounts") || "[]");

    if (!email || !password) {
      this.setState({ error: "Email và mật khẩu không được để trống!" });
      return;
    }

    const found = accounts.find(
      (acc) => acc.email === email && acc.password === password
    );

    if (found) {
      alert("Đăng nhập thành công!");
      this.setState({ email: "", password: "", error: "" });
      this.emailRef.current?.focus();
    } else {
      this.setState({ error: "Sai email hoặc mật khẩu!" });
    }
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <div>
        <h2>Đăng nhập tài khoản</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              ref={this.emailRef}
              placeholder="Nhập email"
            />
          </div>

          <div>
            <label>Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Nhập mật khẩu"
            />
          </div>

          {error && <p>{error}</p>}

          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    );
  }
}
