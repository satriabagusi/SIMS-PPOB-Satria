import { useEffect, useState } from "react";
import { getListServices } from "../../services/serviceList.service";

const ServiceList = () => {

  const [listService, setListService] = useState([]);

  useEffect(() => {
    getListServices((res) => {
      // console.log(res);
      setListService(res.data);
    });
  }, [listService]);

    return (
        <div className="flex flex-row w-screen px-14 gap-6 mb-28 overflow-x-hidden">
        {listService.map((item, index) => (
          <a href={"/pay/"+item.service_code} className="flex flex-col items-center text-center w-1/3" key={index}>
            <img src={item.service_icon} alt="" />
            <p className="text-sm mt-2 break-words">{item.service_name}</p>
          </a>
        ))}
      </div>
    )
}

export default ServiceList;