import IndexBtn from "../components/elements/button/Index"
import Form from "../components/fragments/Form"

const LoginPage = () => {
    return (
        <>
        <Form>
            <Form.label name={"email"} />
            <Form.Input type={"email"} id={"email"} />
            <Form.label name={"password"} />
            <Form.Input type={"password"} id={"password"} />
            <IndexBtn color={"bg-blue-500"}>login</IndexBtn>
        </Form>
        </>
    )
}
export default LoginPage