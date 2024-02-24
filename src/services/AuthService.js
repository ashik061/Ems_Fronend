import axios from "axios";
import { useState } from "react";

import { useNavigate } from 'react-router-dom';

export default function AuthUser(){

    const navigate = useNavigate();


    const getToken =()=>{ // get token froom session storage
        const tokenString =sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }
    const getUser =()=>{ // get user from session storage
        const userString =sessionStorage.getItem('user');
        const userDetails = JSON.parse(userString);
        return userDetails;
    }

    const [token, setToken] =useState(getToken());
    const [user, setUser] = useState(getUser());

    const saveToken =( user, token)=>{ // save to session storage
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));
        //console.log(user);

        setToken(token);
        setUser(user);
        navigate('/Dashboard');

    }

    const logout =()=>{
        sessionStorage.clear();
        navigate('/Login');
    }

    const http =axios.create({

        baseURL: "http://localhost:8080/auth",
        headers:{
            "Content-Type": "application/json"
        }

    });
    return{
        setToken:saveToken,
        token,
        user,
        getToken,
        http,
        logout,
        setUser
    }

}