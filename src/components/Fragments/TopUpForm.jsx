import { useState } from "react";
import { useSelector } from "react-redux";
import { topUpBalance } from "../../services/user.service";
import Button from "../Elements/Button";
import TextInput from "../Elements/Input";

const TopUpForm = () => {
  const [nominal, setNominal] = useState(0);
  const [message, setMessage] = useState("");
  const userToken = useSelector((state) => state.auth.token);


  const handleTopUp = () => {
      topUpBalance(userToken, nominal, (status, response) => {
          if(status){
            setMessage(response.message);
            setTimeout(() => {
                window.location.reload();
                console.log("reload");
            }, 1500);
          }else{
            setMessage("Top Up Gagal. Coba Lagi");
          }
      })
  }

  return (
    <div className="px-20">
      <p className="mb-1">Silahkan masukan</p>
      <h2 className="text-4xl font-medium">Nominal Top Up</h2>

      <div className="flex flex-row w-full gap-5 mt-16">
        <div className="flex flex-col w-2/3">
          <TextInput
            type="number"
            placeholder="masukan nominal Top Up"
            classname="w-full"
            value={nominal === 0 ? "" : nominal.toLocaleString("id-ID")}
            onChange={(e) => setNominal(e.target.value)}
          />
          <Button
            variant="btn-outline-primary"
            classname="w-full"
            disabled={nominal === 0 ? true : false}
            onClick={handleTopUp}
          >
            Top Up
          </Button>
        </div>
        <div className="flex flex-row gap-4 flex-wrap w-2/6">
          <Button
            variant="btn-outline-secondary"
            classname="w-3/12 max-w-sm outline-gray-500"
            onClick={() => setNominal(10000)}
          >
            Rp.10.000
          </Button>
          <Button
            variant="btn-outline-secondary"
            classname="w-3/12 max-w-sm outline-gray-500"
            onClick={() => setNominal(20000)}
          >
            Rp.20.000
          </Button>
          <Button
            variant="btn-outline-secondary"
            classname="w-3/12 max-w-sm outline-gray-500"
            onClick={() => setNominal(50000)}
          >
            Rp.50.000
          </Button>
          <Button
            variant="btn-outline-secondary"
            classname="w-3/12 max-w-sm outline-gray-500"
            onClick={() => setNominal(100000)}
          >
            Rp.100.000
          </Button>
          <Button
            variant="btn-outline-secondary"
            classname="w-3/12 max-w-sm outline-gray-500"
            onClick={() => setNominal(250000)}
          >
            Rp.250.000
          </Button>
          <Button
            variant="btn-outline-secondary"
            classname="w-3/12 max-w-sm outline-gray-500"
            onClick={() => setNominal(500000)}
          >
            Rp.500.000
          </Button>
        </div>
      </div>
      {message !== "" && (
        <div className="w-full text-center border border-emerald-500 rounded mt-10 bg-emerald-500 py-5 text-white">
            <p className="text-2xl font-bold">{message}</p>
        </div>
      )}
    </div>
  );
};

export default TopUpForm;
