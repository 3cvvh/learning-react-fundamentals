import { Link } from "react-router-dom";
import Index from "../elements/Input/Index";
import Btn from "../elements/Btn/Btn";

export default function LoginFragments(){
    const handleLogin = event => {
        event.preventDefault()
        const obj = {
            email:event.target.Email.value,
            password:event.target.Password.value
        };
        localStorage.setItem("email",obj.email)
        localStorage.setItem("password",obj.password)
        window.location.href = "/products"
    }
    return (
        <>
        <form onSubmit={handleLogin} className="mt-8 space-y-5">
  
        <Index type={"email"} placeholder={"example@gmail.com"}>Email</Index>
          <Index type={"password"} placeholder={"....."}>Password</Index>

        <Btn color={"bg-blue-600"} type={"submit"}>Login</Btn>
        </form>
        <br />
        
    </>
    )
}