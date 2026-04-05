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
        <p className="mt-6 text-center text-sm text-slate-600">
          Belum punya akun?{"   "}
          <Link to={"/register"}><span className="font-semibold text-sky-600">Daftar</span></Link>
        </p>
    </>
    )
}