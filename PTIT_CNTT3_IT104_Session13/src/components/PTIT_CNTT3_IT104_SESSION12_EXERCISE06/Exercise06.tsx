import React, { Component } from 'react'
import Child from './Child'
type PropsTypes = {
    id : number;
    title : string;
    content : string;
    author : string;
};

type StateTypes = {
    posts: PropsTypes[];
}

export default class Exercise06 extends Component<{}, StateTypes> {
    constructor(props: {}) {
        super(props);
        this.state = {
            posts: [
                { id: 1, title: 'Tại sao nên học ReactJS', content: 'Học ReactJS để đi làm', author: 'David' },
                { id: 2, title: 'Props trong ReactJS', content: 'Props giúp truyền dữ liệu từ component con xuống component cha', author: 'Linda' },
                { id: 3, title: 'State trong ReactJS là gì?', content: 'State giúp trữ trạng thái dữ liệu bên trong một component', author: ' David' }
            ]

        }
    }
  render() {
    return (
      <div>
        <h2>Danh Sách Bài Viết</h2>
        {this.state.posts.map((post) => (
          <Child 
            id={post.id} 
            title={post.title} 
            content={post.content} 
            author={post.author}>
          </Child>
        ))}
       
        
      </div>
    )
  }
}
