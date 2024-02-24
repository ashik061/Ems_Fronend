import axios from "axios";
export default function AuthUser(){
    const http =axios.create({
        baseURL: "http://localhost:8080/auth",
        headers:{
            "Content-Type": "application/json"
        }

    });
    return{
        http
    }

}