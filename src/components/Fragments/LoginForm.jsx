import { useState } from "react";
import { Link } from "react-router-dom";
import { getProfile, login } from "../../services/auth.service";
import Button from "../Elements/Button";
import TextInput from "../Elements/Input";

const LoginForm = () => {
  const [isLogginFailed, setIsLogginFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loginHandler = (evt) => {
    evt.preventDefault();
    const data = {
      email: evt.target.username.value,
      password: evt.target.password.value,
    };

    login(data, (status, res) => {
      if (status) {
        console.log(res.token);
        getProfile(res.token, (statusProfile, responseProfile) => {
          localStorage.setItem("token", res.token);
          localStorage.setItem("user", JSON.stringify(responseProfile));
          setIsLogginFailed(false);
          window.location.href = "/";
        });
      } else {
        // console.log(res);
        setIsLogginFailed(true);
        setErrorMessage(res.message);
      }
    });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <form onSubmit={loginHandler}>
        <div className="flex flex-col w-full justify-center items-center">
          <TextInput
            type="email"
            placeholder="Masukan username anda"
            name="username"
          />
          <TextInput
            type="password"
            placeholder="Masukan password anda"
            name="password"
          />
          {isLogginFailed && <p className="text-red-600">{errorMessage}</p>}
        </div>
        <Button
          variant="btn-primary"
          classname="mt-10 w-full justify-center"
          type="submit"
        >
          Masuk
        </Button>
      </form>
      <p className="text-gray-400 text-sm mt-5">
        belum punya akun? registrasi
        <Link to="/register" className="text-primary-red font-semibold">
          {" "}
          di sini
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
