import {jwtDecode} from "jwt-decode";
import { useEffect, useState } from "react";
export const useLogin = () => {
    const token = localStorage.getItem("token") ? localStorage.getItem("token") : false
    const [userData,setUserData] = useState({})
    useEffect(() => {
        if(token == false){
            window.location.href = "/login"
            return
        }
        setUserData({...jwtDecode(token)})
    },[])   
    return userData
}