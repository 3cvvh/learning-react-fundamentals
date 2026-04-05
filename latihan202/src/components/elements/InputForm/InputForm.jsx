import Input from "./Input";
import Label from "./Label";

export default function InputForm({children,type}){
    return (
        <>
        <Label>{children}</Label><br />
        <Input type={type} name={children} /><br />
        </>
    )
}