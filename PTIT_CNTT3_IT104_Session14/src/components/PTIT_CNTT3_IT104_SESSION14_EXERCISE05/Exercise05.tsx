import React, { Component, type ChangeEvent, type FormEvent } from "react";

type InitialState = {
    productCode: string;
    productName: string;
    price: string;
    quantity: string;
};

export default class Exercise05 extends Component<{}, InitialState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            productCode: "",
            productName: "",
            price: "",
            quantity: "",
        };
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof InitialState;
        this.setState({
            [name]: e.target.value,
        } as InitialState);
    };


    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const product = {
            productCode: this.state.productCode,
            productName: this.state.productName,
            price: Number(this.state.price),
            quantity: Number(this.state.quantity),
        };

        console.log(product);
    };

    render() {
        return (
            <div>
                <h2>Thêm mới sản phẩm</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Mã sản phẩm: </label>
                        <input
                            type="text"
                            name="productCode"
                            value={this.state.productCode}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Tên sản phẩm: </label>
                        <input
                            type="text"
                            name="productName"
                            value={this.state.productName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Giá: </label>
                        <input
                            type="number"
                            name="price"
                            value={this.state.price}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Số lượng: </label>
                        <input
                            type="number"
                            name="quantity"
                            value={this.state.quantity}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit">Đăng ký</button>
                </form>
            </div>
        );
    }
}
