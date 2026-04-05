import Button from "../components/elements/Button/Button";
import {Link} from 'react-router-dom'
export default function Index(){
    return (
        <>
        <Link to="/login"><Button>Login</Button></Link><br />
        <Link to="/register"><Button>Register</Button></Link>
        </>
    )
}