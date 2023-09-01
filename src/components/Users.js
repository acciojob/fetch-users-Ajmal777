import React, { useEffect, useState } from "react";
import Axios from "axios";

const Users = () =>{
    const [userList, setUserList] = useState([]);

    function fetchData(){
        Axios.get('https://reqres.in/api/users')
        .then(response => {
            setUserList(response.data.data);
        })
        .catch(error => console.log(error));
    }


    return (
        <div>
            <button className="btn" onClick={fetchData}>Get User List</button>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList < 1 && 
                        <tr>
                            <td colSpan={4}>No data found to display.</td>
                        </tr>
                    }
                    {
                        userList.length > 0 && 
                        userList.map(user => {
                            return (
                                <tr>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <img src={user.avatar} style={{maxWidth: '20px', maxHeight: '20px'}} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users;