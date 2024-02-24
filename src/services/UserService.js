import axios from "axios";

export default function UserService(){
    const httpUser =axios.create({

        baseURL: "http://localhost:8080/user",
        headers:{
            "Content-Type": "application/json"
        }
    
    });

    return (
        httpUser
    )

}

