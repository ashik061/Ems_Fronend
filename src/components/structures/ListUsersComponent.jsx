import React, { useEffect, useState } from 'react'
import AdminService from '../../services/AdminService';
import axios from 'axios';
import AuthUser from "../../services/AuthService";
import UpdateUserProfileModal from './UpdateUserProfile';


const ListUsersComponent = () => {

    const {token} = AuthUser();


    const {httpAdmin} =AdminService();
    
    const [users, setUsers]= useState([]);


    axios.get('http://localhost:8080/admin/users', {
        headers: {
            "Authorization": `Bearer ${token}`
        } 
    }).then((res)=>{
        //console.log(res.data);
        setUsers(res.data);
    }).catch((error) => {
        console.error('Data fetch failed:', error);
    });

    const addUsers = () =>{
        return null;
    }

    // useEffect(()=> {
    //     httpAdmin.get('/users').then((response) => {
    //         setUsers(response.data);
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }, [])

    return (
        <div className='.container'>
            <h2 className='text-center'>List of All Users</h2>
            <button type="button" onClick={addUsers} className="btn btn-primary mt-4">Add New User</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Email</th>
                        <th>Full Name</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr key={user.userId}>
                                <td>{user.userId}</td>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>

                            </tr>)
                    }
                </tbody>
            
        </table>
    </div >
  )
}

export default ListUsersComponent