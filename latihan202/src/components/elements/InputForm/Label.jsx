const Label = ({children}) => {
    return (
        <label htmlFor={children}>{children}</label>
    )
}
export default Label