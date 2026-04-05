import { jwtDecode } from "jwt-decode";

export const Decode = () => {

const token =  localStorage.getItem("token")
return token ? jwtDecode(token) : false
}