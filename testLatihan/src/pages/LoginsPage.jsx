import FormLogin from "../components/fragments/FormLogin";
import AuthLayout from "../components/layouts/AuthLayout";

export default function LoginPage(){
return (
    <AuthLayout title="login">
        <FormLogin/>
    </AuthLayout>
)
}