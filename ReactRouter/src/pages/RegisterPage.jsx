import FormRegister from "../components/fragments/FormRegister"
import AuthLayout from "../components/layouts/AuthLayout"

const RegisterPage = () => {
    return (
        <AuthLayout title="register">
        <FormRegister></FormRegister>
        </AuthLayout>
    )
}
export default RegisterPage