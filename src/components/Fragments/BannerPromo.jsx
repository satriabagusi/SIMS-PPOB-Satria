import { useEffect, useState } from "react";
import { getBanner } from "../../services/banner.service";

const BannerPromo = () => {

  const [listBanner, setListBanner] = useState([]);

  useEffect(() => {
    getBanner((res) => {
      console.log(res);
      setListBanner(res.data);
    });
  }, []);

  return (
    <div className="w-screen px-14 ">
      <p>Temukan promo menarik</p>
      <div className="flex flex-row gap-x-8 mt-8 overflow-x-auto">
        {listBanner.map((item, index) => (
          <a href="#" key={index}>
            <img className="w-96" src={item.banner_image} alt={item.banner_name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default BannerPromo;
