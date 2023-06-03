import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

function UsersFunction() {
    //     const [users, setUsers] = useState([]);

    //     const handleUsers = async() => {
    //         try { 
    //             let getData = await axios("https://jsonplaceholder.typicode.com/users") 
    //             setUsers([getData.data])

    //     } catch(error){
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     handleUsers();
    //   }, [users]);
    //   // ...

    const [users, setUsers] = useState([]);
    const handleUser = async () => {
        try {
            let getdata = await axios("https://jsonplaceholder.typicode.com/users")
            setUsers(getdata.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        handleUser()
    }, []);

    return (
        <div>
            <h1>Users Function</h1>
            {users.map(user => {

                return (

                    <div key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>username: {user.username}</p>
                        <p>Email: {user.email}</p>
                    </div>
                );

            })}
        </div>
    )
}

export default UsersFunction
