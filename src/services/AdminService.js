import axios from "axios";

const REST_API_URL='http://localhost:8080/admin/users';

export const listUsers = ()=>{
    return axios.get(REST_API_URL);
}