import RegisterForm from "../components/Fragments/RegisterForm";
import AuthLayout from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
    return (
        <AuthLayout authType="register">
            <RegisterForm/>
        </AuthLayout>
    )

}

export default RegisterPage;