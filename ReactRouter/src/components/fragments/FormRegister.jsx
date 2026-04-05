import Button from "../elements/Button/Button"
import Index from "../elements/Input/Index"
import {Link} from "react-router-dom"
const FormRegister = () => {
return (
    <form>
    <Index type="text">Username:</Index>
    <Index type="email">email:</Index>
    <Index type="password">password:</Index>
    <Button>daftar</Button>
    <p>punya akun? <Link to="/login">Login</Link></p>
    </form>
)
}
export default FormRegister