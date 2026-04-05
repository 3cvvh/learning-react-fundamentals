const Form = ({children,}) => {
    return (
        <form>
        {children}
        </form>
    )
}
const Input = ({type,id}) => {
return (
    <>
    <input type={type} id={id} /> <br />
    </>
)
}
const Label = ({name}) => {
    return (
        <>
        <label htmlFor={name}>{name}:</label>
        </>
    )
}
Form.label = Label
Form.Input = Input
export default Form