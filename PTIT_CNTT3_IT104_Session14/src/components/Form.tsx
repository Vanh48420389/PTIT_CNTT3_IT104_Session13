import React, { Component } from 'react'

type InitialState = {
    email: string;
    password: string;
};
export default class Form extends Component<{}, InitialState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            email: '',
            password: ''

        };
    }

  componentDidMount() {
    console.log('Form component đã được mount vào DOM');
    // Thường dùng để gọi API hoặc thực hiện các thao tác khởi tạo
  }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted with values:', this.state);
        // Xử lý dữ liệu form ở đây
    }
    handChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Email changed:', event.target.value);
        this.setState({ email: event.target.value });

    }
    handChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Password changed:', event.target.value);
        this.setState({ password: event.target.value });
    }

  componentDidUpdate(prevProps: {}, prevState: InitialState): void {
    console.log('Form component đã được cập nhật');
    // Thường dùng để cập nhật lại DOM khi state hoặc props thay đổi
  }

  componentWillUnmount(): void {
    console.log('Form component sẽ bị unmount khỏi DOM');
    // Thường dùng để dọn dẹp các sự kiện, timer, hoặc các tài nguyên khác
  }
    

  render() {
    return (
      <div>
        <h2>Form Component</h2>

        <form action="" onSubmit={this.handleSubmit}>
            <h3>Form dang nhap</h3>
            <label htmlFor="">Email</label>
            <input 
            type="text" 
            onChange = {this.handChangeEmail} 
            /><br />
            <label htmlFor="">Password</label>
            <input type="password" />Password<br />
            <button type="submit">Login</button>
        </form>
        
      </div>
    )
  }
}
