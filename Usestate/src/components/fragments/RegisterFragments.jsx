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
        </>
    )
}

export default RegisterFragments