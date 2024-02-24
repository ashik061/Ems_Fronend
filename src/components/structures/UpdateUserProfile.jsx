import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import AuthUser from "../../services/AuthService";
import UserService from "../../services/UserService";
import axios from "axios";

const UpdateUserProfileModal = ({ show, handleClose }) => {
    const { user, token, setUser } = AuthUser();
    const { httpUser } = UserService();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();

    //console.log(user.userId);

    const submitForm = () => {
        axios.put(`http://localhost:8080/user/profile/${user.userId}`, { email: email, password: password, name: name, phone: phone }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((res) => {
            console.log("User updated successfully:", res.data);
            setUser(res.data);
        }).catch((error) => {
            console.error('Failed to update user:', error);
        });
        handleClose();

    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update User Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group mt-3">
                    <label>Email address:</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder={user.email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="New Password"
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Name:</label>
                    <input
                        type="name"
                        className="form-control"
                        placeholder={user.name}
                        onChange={(e) => setName(e.target.value)}
                        id="name"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Phone No:</label>
                    <input
                        type="phone"
                        className="form-control"
                        placeholder={user.phone}
                        onChange={(e) => setPhone(e.target.value)}
                        id="phone"
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={submitForm}>
                    Update
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateUserProfileModal;
