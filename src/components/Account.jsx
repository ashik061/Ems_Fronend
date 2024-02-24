import { useState } from "react";
import AuthUser from "../services/AuthService"
import UpdateUserProfile from "./structures/UpdateUserProfile";

export default function Account() {

    const { user } = AuthUser();
    const userRole = user.authorities[0].authority;

    const [showUpdateModal, setShowUpdateModal] = useState(false);

    const handleUpdateUser = () => {
        setShowUpdateModal(true);
    };

    const handleCloseUpdateModal = () => {
        setShowUpdateModal(false);
    };



    return (
        <div className="container">
            <h2 className="mt-4 mb-4">User Details</h2>
            <div className="row">
                <p><strong>ID:</strong> {user.userId}</p>
                <div className="col-md-6">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
                <div className="col-md-6">
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Role:</strong> {userRole}</p>
                </div>
            </div>

            <button type="button" onClick={handleUpdateUser} className="btn btn-primary mt-4">Update User</button>
            <UpdateUserProfile show={showUpdateModal} handleClose={handleCloseUpdateModal} />
            </div>

    )
}