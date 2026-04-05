import Button from "../elements/Button/Button"
import Index from "../elements/Input/Index"

const FormRegister = () => {
return (
    <form>
    <Index type="text">Username:</Index>
    <Index type="email">email:</Index>
    <Index type="password">password:</Index>
    <Button>daftar</Button>
    </form>
)
}
export default FormRegister