import Input from "./Input"
import Label from "./Label"

const Index = ({children,type,placeholder}) => {
return (
    <div className="space-y-1">
        <Label>{children}</Label>
        <Input name={children}  placeholder={placeholder} type={type} />
    </div>
)
}
export default Index