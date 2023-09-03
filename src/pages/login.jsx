import LoginForm from "../components/Fragments/LoginForm";
import AuthLayout from "../components/Layouts/AuthLayouts";


const LoginPage = () => {
    return (
        <AuthLayout authType="login">
            <LoginForm />
        </AuthLayout>
    )

}

export default LoginPage;