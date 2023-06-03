import React, { Component } from 'react'

class UserClass extends Component {
    constructor(props){ 
        super(props)
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((result)=> result.json())
        .then((data)=>{
            console.log(data)
            this.setState({
               users: data 
            })
        })
    }
    
    render() {
    return (
      <>
      <h1>User Class</h1>
        {this.state.users.map(user=>{
            return (

                    <div key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>username: {user.username}</p>
                        <p>Email: {user.email}</p>
                    </div>
            );
        })}
      </>
    )
  }
}

export default UserClass
