import axios from "axios";

const URL = "http://localhost:8000";

//Axios Request For Signup
export const authenticationSignup = async(data)=>{
    try {
        return await axios.post(`${URL}/api/authSignup`,data);
    } catch (error) {
        return error.response;
    }
}

//Axios Request For Login
export const authenticationLogin = async(data)=>{
    try {
        return await axios.post(`${URL}/api/authLogin`,data);
    } catch (error) {
        return error.response;
    }
}
