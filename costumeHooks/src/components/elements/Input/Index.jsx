import Input from "./Input"
import Label from "./Label"
import { forwardRef } from "react";
const Index = forwardRef(({children,type,placeholder},ref) => {
 return(<div className="space-y-1">
        <Label>{children}</Label>
        <Input ref={ref} name={children}  placeholder={placeholder} type={type} />
    </div>
 )
})
export default Index