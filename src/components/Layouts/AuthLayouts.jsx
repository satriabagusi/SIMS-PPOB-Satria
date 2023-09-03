
const AuthLayout = (props) => {
//   const { children } = props;
    const {authType = "login", children} = props;
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex-col w-1/2">
        <div className="flex flex-row gap-2 justify-center items-center">
          <img src="/images/Logo.png" alt="" />
          <h1 className="text-xl font-bold">SIMS PPOB</h1>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center mt-10">
          <h1 className="text-3xl font-semibold w-2/3 text-center mb-10">
            {authType == "login" ? "Masuk atau buat akun untuk memulai" : "Lengkapi data untuk membuat akun"}
          </h1>
          {children}
        </div>
      </div>
      <div className="bg-hero-login-img bg-center w-1/2 h-screen"></div>
    </div>
  );
};

export default AuthLayout;
