import IndexBtn from "../components/elements/button/Index"
import Form from "../components/fragments/Form"

const RegisterPage = () => {
    return (
        <>
        <Form>
            <Form.label name={"nama"} />
            <Form.Input type={"text"} id={"nama"} />
            <Form.label name={"email"} />
            <Form.Input type={"email"} id={"email"} />
            <Form.label name={"password"} />
            <Form.Input type={"password"} id={"password"} />
            <IndexBtn color={"bg-blue-400"}>daftar</IndexBtn>
        </Form>
        </>
    )
}
export default RegisterPage