import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserBalance } from "../../services/user.service";


const ProfileSection = () => {
    const user = useSelector((state) => JSON.parse(state.auth.user));
    const token = useSelector((state) => state.auth.token);

    const [balance, setBalance] = useState(0);
    const [isBalanceVisible, setIsBalanceVisible] = useState(false);

    useEffect(() => {
      getUserBalance(token, (status, response) => {
        if (status) {
          console.log(response)
          setBalance(response.balance);
        }else{
          console.log(response);
        }
      });
    }, [balance, token]);

    return (
        <div className="flex justify-between w-screen py-14 px-20">
        <div className="flex flex-col w-3/5">
          <img src={user.profile_image} alt="" className="w-1/6 rounded-full mb-6" />
          <p>Selamat datang,</p>
          <h4 className="font-medium text-4xl">{user.first_name + " " + user.last_name}</h4>
        </div>
        <div className="flex flex-col bg-card-balance bg-center bg-cover bg-no-repeat w-2/5 rounded-2xl p-5 text-white align-middle ">
          <h6 className="">Saldo Anda</h6>
          <h4 className="font-medium text-4xl">
            Rp <input type={isBalanceVisible ? "text" : "password"} value={balance.toLocaleString("id-ID")} readOnly className="text-white bg-transparent outline-none" />
          </h4>
          <p className="text-sm mt-7 cursor-pointer" onClick={() => setIsBalanceVisible(!isBalanceVisible)}>Lihat Saldo</p>
        </div>
      </div>
    )
}

export default ProfileSection;