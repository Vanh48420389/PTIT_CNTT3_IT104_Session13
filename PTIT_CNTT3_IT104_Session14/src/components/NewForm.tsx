import React, { Component } from 'react'
type User ={
    email: string;
    password: string;
}
type InitialState = {
    user: User;
};


export default class Form extends Component<{}, InitialState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''
            }
           

        };
    }


    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted with values:', this.state.user);
    }
    handChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Email changed:', event.target.value);
        this.setState({ 
            user: {
                ...this.state.user,
                [event.target.name]: event.target.value
            }
         });

    }
    
   

  render() {
    return (
      <div>
        <h2>Form Component</h2>

        <form action="" onSubmit={this.handleSubmit}>
            <h3>Form dang nhap 2</h3>


            <label htmlFor="">Email</label>
            <input 
            type="text" 
            onChange={this.handChange} 

            /><br />

            <label htmlFor="">Password</label>
            <input 
            type="password" 
            onChange={this.handChange}

            /><br />
            
            <button type="submit">Login</button>
        </form>
        
      </div>
    )
  }
}
