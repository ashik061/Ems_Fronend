import axios from "axios";
import AuthUser from "./AuthService";

export default function AdminService() {

    const {token} = AuthUser();
    //console.log(token);

    const httpAdmin = axios.create({

        baseURL: "http://localhost:8080/admin",
        headers: {
            "Content-Type": "application/json"
                }

    });

    return (
        httpAdmin
    )
}

