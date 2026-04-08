import LoginFragments from "../components/fragments/LoginFragments";
import LayoutsAuth from "../components/layouts/AuthLayout";

export default function Login() {
  return (
    <LayoutsAuth type={"login"}>
      <LoginFragments />
    </LayoutsAuth>
  );
}