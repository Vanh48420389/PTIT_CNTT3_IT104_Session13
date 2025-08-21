import React, { Component } from 'react'
type UserTypes = {
    id: number;
    name: string;
    age: number;
}
type PropTypes = {
    users: UserTypes[];
}
export default class Exercise03 extends Component<{}, PropTypes> {
    constructor(props: {}) {
        super(props);
        this.state = {
            users: [
                { id: 1, name: 'Jonh', age: 20 },
                { id: 2, name: 'Marry', age: 22 },
                { id: 3, name: 'Jane', age: 25 },
            ]

        };
    }
  render() {
    return (
      <div>
        <h2>Danh sách người dùng</h2>
        <ul>
            {this.state.users.map((user) => (
                <li key={user.id}>
                    ID: {user.id}, Tên: {user.name}, Tuổi: {user.age}
                </li>
            ))}
        </ul>
      </div>
    )
  }
}
