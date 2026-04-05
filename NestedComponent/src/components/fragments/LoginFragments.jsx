import { Link } from "react-router-dom";
import Index from "../elements/Input/Index";
import Btn from "../elements/Btn/Btn";

export default function LoginFragments(){
    return (
        <>
        <form action="" className="mt-8 space-y-5">
  
        <Index type={"email"} placeholder={"example@gmail.com"}>Email</Index>
          <Index type={"password"} placeholder={"....."}>Password</Index>

        </form>
        <br />
        <Btn>Login</Btn>
        
    </>
    )
}