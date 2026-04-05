import Btn from "../elements/Btn/Btn";
import Index from "../elements/Input/Index";
import {Link} from "react-router-dom";
const RegisterFragments = () => {
    return (
        <>
        <Index type={"email"} placeholder={"Example@gmail.com"}>Email</Index>
        <Index type={"text"} placeholder={"test"}>Username</Index>
        <Index placeholder={"....."} type={"password"}>password</Index>
        <br />
        <Btn>Daftar</Btn>
         <p className="mt-6 text-center text-sm text-slate-600">
          Sudah punya akun?{"   "}
          <Link to={"/login"}><span className="font-semibold text-sky-600">Masuk</span></Link>
        </p>
        </>
    )
}

export default RegisterFragments