import Label from "./Label"
import Input from "./Input"
const Index = ({children,type}) => {
    return (
        <>
        <Label htmlFor={children}>{children}</Label><br />
        <Input type={type} >{children}</Input><br />
        </>
    )
}
export default Index