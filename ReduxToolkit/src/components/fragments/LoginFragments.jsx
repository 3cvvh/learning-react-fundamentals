import { Link } from "react-router-dom";
import Index from "../elements/Input/Index";
import Btn from "../elements/Btn/Btn";
import { useEffect, useRef, useState } from "react";
import { login } from "../../service/authApi";
export default function LoginFragments(){
// const [data,setData] = useState({})
const [faild,setFaild] = useState("")
const emailRef = useRef(null)
useEffect(() => {
emailRef.current.focus()
},[])

    const handleLogin = event => {
        event.preventDefault()
        const obj = {
            username:event.target.Username.value,
            password:event.target.Password.value
        };
        // localStorage.setItem("email",obj.email)
        // localStorage.setItem("password",obj.password)
        // window.location.href = "/products"
        login(obj,res => {
            if(res){
                console.log(res)
                localStorage.setItem("token",res.data.accessToken)
                return window.location.href = "/products"
            }
            setFaild("password atau username salah")
        })
        // console.log(data)
    }
    console.log(faild)
    return (
        <>
        {faild && (
            <p className="text-red-500">{faild}</p>
        )}
        <form onSubmit={handleLogin} className="mt-8 space-y-5">
  
        <Index ref={emailRef} type={"text"} placeholder={"example@gmail.com"}>Username</Index>
          <Index type={"password"} placeholder={"....."}>Password</Index>

        <Btn color={"bg-blue-600"} type={"submit"}>Login</Btn>
        </form>
        <br />
        
    </>
    )
}