import { useEffect, useState } from "react";
import {
  getListServices,
  payServices,
} from "../../services/serviceList.service";
import Button from "../Elements/Button";
import TextInput from "../Elements/Input";

const PayServiceForm = ({ serviceCode }) => {
  const [serviceDetail, setServiceDetail] = useState();
  const [serviceName, setServiceName] = useState("");
  const [serviceIcon, setServiceIcon] = useState("");
  const [serviceTarif, setServiceTarif] = useState(0);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    if (serviceCode) {
      getListServices((res) => {
        let service_detail = res.data.find(
          (item) => item.service_code === serviceCode
        );
        setServiceDetail(service_detail);
        setServiceName(serviceDetail.service_name);
        setServiceIcon(serviceDetail.service_icon);
        setServiceTarif(serviceDetail.service_tariff);
      });
    }
  }, [serviceDetail, serviceCode]);

  const handlePay = () => {
    setIsLoading(true);
    payServices(serviceCode, (status, res) => {
      if (status) {
        setMessage(res.message);
        setTimeout(() => {
            window.location.reload();
        }, 1500);
      } else {
        console.log(res);
        // setMessage(res.message);
        setMessageError(res.message);
      }
    });
  };

  return (
    <div className="w-full px-20">
      <p>Pembayaran</p>
      <div className="flex flex-row gap-4 items-center mt-2">
        <img src={serviceIcon} alt="" className="w-12 rounded" />
        <p>{serviceName}</p>
      </div>
      <div className="flex flex-col mt-16 ">
        <TextInput
          classname="w-full"
          placeholder="Masukan jumlah pembayaran"
          value={serviceTarif.toLocaleString("id-ID")}
        />
        <Button variant="btn-primary" classname="w-full" onClick={handlePay} disabled={isLoading}>
          Bayar
        </Button>
      </div>
      {message !== "" && (
        <div className="w-full text-center border transition ease-in border-emerald-500 rounded mt-10 bg-emerald-500 py-5 text-white">
          <p className="text-2xl font-bold">{message}</p>
        </div>
      )}
      {messageError !== "" && (
        <div className="w-full text-center border transition ease-in border-red-500 rounded mt-10 bg-red-500 py-5 text-white">
          <p className="text-2xl font-bold">{messageError}</p>
        </div>
      )}
    </div>
  );
};

export default PayServiceForm;
