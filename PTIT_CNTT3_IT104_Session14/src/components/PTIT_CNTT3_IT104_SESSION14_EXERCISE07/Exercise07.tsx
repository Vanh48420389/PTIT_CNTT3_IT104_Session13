import React, { Component, createRef } from "react";

type Account = {
    name: string;
    email: string;
    password: string;
    address: string;
};

type InitialState = {
    name: string;
    email: string;
    password: string;
    address: string;
    error: string;
};

export default class Exercise07 extends Component<{}, InitialState> {
    
    nameRef = createRef<HTMLInputElement>();

    constructor(props: {}) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            address: "",
            error: "",
        };

        this.nameRef = createRef();
    }

    componentDidMount() {
        this.nameRef.current?.focus();
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value } as Pick<InitialState, keyof InitialState>);
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, password, address } = this.state;

        const accounts: Account[] = JSON.parse(localStorage.getItem("accounts") || "[]");

        if (!name || !email || !password) {
            this.setState({
                error: "Tên sinh viên, Email và Mật khẩu không được để trống",
            });
            return;
        }

        const emailExist = accounts.some((acc) => acc.email === email);
        if (emailExist) {
            this.setState({ error: "Email không được phép trùng" });
            return;
        }

        const newAccount: Account = { name, email, password, address };
        accounts.push(newAccount);
        localStorage.setItem("accounts", JSON.stringify(accounts));

        this.setState({
            name: "",
            email: "",
            password: "",
            address: "",
            error: "",
        });

        alert("Đăng ký tài khoản thành công!");
        this.nameRef.current?.focus();
    };

    render() {
        const { name, email, password, address, error } = this.state;

        return (
            <div >
                <h2 >Đăng ký tài khoản</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Tên sinh viên</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            ref={this.nameRef}
                            placeholder="Nhập tên sinh viên"
                        />
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
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

                    <div>
                        <label>Địa chỉ</label>
                        <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={this.handleChange}
                            placeholder="Nhập địa chỉ"
                        />
                    </div>

                    {error && <p>{error}</p>}

                    <button type="submit">
                        Đăng ký
                    </button>
                </form>
                <p>
                    Form đăng ký tài khoản
                </p>
            </div>
        );
    }
}
