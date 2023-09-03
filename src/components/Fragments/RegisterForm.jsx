import { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../../services/auth.service';
import Button from "../Elements/Button";
import TextInput from "../Elements/Input";

const RegisterForm = () => {

  const [isRegisterFailed, setIsRegisterFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  const registerHandler = (evt) => {
    evt.preventDefault();
    const data = {
      email: evt.target.email.value,
      first_name: evt.target.first_name.value,
      last_name: evt.target.last_name.value,
      password: evt.target.password.value,
      confirmPassword: evt.target.confirm_password.value
    };

    if(data.password !== data.confirmPassword){
      setErrorMessage("Password Konfirmasi tidak sama");
      return;
    }

    register(data, (status, res) => {
      if (status) {
        console.log(res);
        setIsRegisterFailed(false);
        setMessage(res.message);
      } else {
        // console.log(res);
        setIsRegisterFailed(true);
        setErrorMessage(res.message);
      }
    })
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <form onSubmit={registerHandler}>
        <div className="flex flex-col w-full justify-center items-center">
          <TextInput type="email" placeholder="Masukan email anda" name="email" />
          <TextInput type="text" placeholder="nama depan" name="first_name" />
          <TextInput type="text" placeholder="nama belakang" name="last_name" />
          <TextInput type="password" placeholder="buat password" name="password" />
          <TextInput type="password" placeholder="konfirmasi password" name="confirm_password" />
        </div>
        {isRegisterFailed && <p className="text-red-600">{errorMessage}</p>}
        {message && <p className="text-emerald-600">{message}</p>}
        <Button variant="btn-primary" classname="mt-10 w-full justify-center " type="submit">
          Registrasi
        </Button>
      </form>
      <p className="text-gray-400 text-sm mt-5">
        sudah punya akun? login
        <Link to="/login" className="text-primary-red font-semibold"> di sini</Link>
      </p>
    </div>
  );
};

export default RegisterForm;
