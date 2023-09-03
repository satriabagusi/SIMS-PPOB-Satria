
const Navbar = () => {
    const pathName = window.location.pathname;
    return (
      <nav className=" flex justify-center h-[100px] border-b">
        <div className="w-screen px-14 py-3 flex items-center">
          <div className="flex items-center w-screen justify-between">
            <a
              href="/"
              className="flex flex-row justify-center items-center gap-3"
            >
              <img src="/images/Logo.png" />
              <span className="font-bold">SIMS PPOB</span>
            </a>
            <div className="flex w-1/6 justify-between">
              <a href="/top-up" className={pathName === "/top-up" ? "text-primary-red" : ""}>Top Up</a>
              <a href="/transaction" className={pathName === "/transaction" ? "text-primary-red" : ""}>Transaction</a>
              <a href="/account" className={pathName === "/account" ? "text-primary-red" : ""}>Akun</a>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar
  