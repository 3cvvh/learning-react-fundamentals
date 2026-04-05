import RegisterFragments from "../components/fragments/RegisterFragments"
import LayoutsAuth from "../components/layouts/AuthLayout"

const Register = () => {
    return (
        <>
        <LayoutsAuth type={"register"}>
            <RegisterFragments></RegisterFragments>
        </LayoutsAuth>
        </>
    )
}

export default Register