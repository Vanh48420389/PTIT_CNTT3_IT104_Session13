import React, { Component } from "react";

interface Todo {
  id: number;
  name: string;
  assign: string;
  status: boolean;
  created_at: Date;
}

interface State {
  todos: Todo[];
}

export default class Todolist extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          name: "Học ReactJS",
          assign: "David",
          status: false,
          created_at: new Date(),
        },
        {
          id: 2,
          name: "Hoàn thành bài tập",
          assign: "Linda",
          status: true,
          created_at: new Date(),
        },
        {
          id: 3,
          name: "Làm dự án",
          assign: "David",
          status: false,
          created_at: new Date(),
        },
      ],
    };
  }

  formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  render() {
    return (
      <div>
        <h1>Danh sách công việc</h1>
        <table border={1} cellPadding={8} style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên công việc</th>
              <th>Người thực hiện</th>
              <th>Trạng thái</th>
              <th>Ngày tạo</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.assign}</td>
                <td>
                  {todo.status ? (
                    <span style={{ color: "green" }}>Đã hoàn thành</span>
                  ) : (
                    <span style={{ color: "red" }}>Chưa hoàn thành</span>
                  )}
                </td>
                <td>{this.formatDate(todo.created_at)}</td>
                <td>
                  <button>Sửa</button>
                    
                  <button>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
