import React from 'react'

const ListUsersComponent = () => {
    const dummyData = [
        {
            "userId": "3827537d-967a-410c-acb2-ac831cc02c1a",
            "email": "ashik18710@gmail.com",
            "phone": null,
            "name": null,
            "password": "$2a$10$GIEZERXOXGAgTOworuvoYOH.g17maisQhsq0ImdjcRcbS/8/EYDLW",
            "status": true,
        },
        {
            "userId": "3827537d-967a-410c-acb2-ac831cc02c2a",
            "email": "user1@gmail.com",
            "phone": null,
            "name": null,
            "password": "$2a$10$GIEZERXOXGAgTOworuvoYOH.g17maisQhsq0ImdjcRcbS/8/EYDLW",
            "status": true,
        },
        {
            "userId": "3827537d-967a-410c-acb2-ac831cc02c3a",
            "email": "user20@gmail.com",
            "phone": null,
            "name": null,
            "password": "$2a$10$GIEZERXOXGAgTOworuvoYOH.g17maisQhsq0ImdjcRcbS/8/EYDLW",
            "status": true,
        }


    ]
    return (
        <div className='.container'>
            <h2 className='text-center'>List of All Users</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Email</th>
                        <th>Full Name</th>
                        <th>Phone Number</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dummyData.map(user =>
                            <tr key={user.userId}>
                                <td>{user.userId}</td>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.password}</td>

                            </tr>)
                    }
                </tbody>
            
        </table>
    </div >
  )
}

export default ListUsersComponent