import Button from "../elements/Button/Button";
import Index from "../elements/Input/Index";

export default function FormLogin(){
    return (
        <form action="">
        <Index type="text">username</Index>
        <Index type="password">Password</Index>
        <Button>login</Button>
        </form>
    )
}