import Button from "../elements/Button/Button";
import Index from "../elements/Input/Index";
import { Link } from "react-router-dom";
export default function FormLogin(){
    return (
        <>
        <form action="">
        <Index type="text">username</Index>
        <Index type="password">Password</Index>
        <Button>login</Button>
        </form>
        <p>punya akun? <Link to="/register">register</Link></p>
        <p><Link to="/">main menu</Link></p>
        </>
    )
}