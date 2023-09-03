import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getHistoryTransaction } from "../../services/user.service";

const HistoryTransaction = () => {
  const accessToken = useSelector((state) => state.auth.token);
  const [historyTransaction, setHistoryTransaction] = useState([]);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    getHistoryTransaction(accessToken, 0, limit, (status, response) => {
      if (status) {
        setHistoryTransaction(response.records);
        // console.log(response);
      }
    });
  }, [historyTransaction, accessToken, limit]);

  const formatDate = (dateString) => {
    return moment(dateString).locale("id").format("DD MMMM YYYY HH:mm");
  }

  return (
    <div className="w-full mt-5 px-20">
      <p className="font-medium text-2xl">Semua Transaksi</p>

      <div className="mb-20">
        {historyTransaction.map((item, index) => (
          <div
            className="flex justify-between w-full border border-gray-200 rounded py-3 px-5 my-5"
            key={index}
          >
            <div>
              <p
                className={(item.transaction_type == "TOPUP" ? "text-emerald-500" : "text-red-500") +
                  " font-medium text-xl" 
                }
              >
                {(item.transaction_type == "TOPUP"
                  ? "+ Rp."
                  : "- Rp." ) + item.total_amount.toLocaleString("id-ID")}
              </p>
              <p className="text-gray-400 text-xs mt-2">{formatDate(item.created_on) + " WIB"}</p>
            </div>
            <div>
              <p className="text-gray-500">{item.transaction_type == "TOPUP" ? "Top Up Saldo" : item.description}</p>
            </div>
          </div>
        ))}

        <p
          className="text-primary-red text-center cursor-pointer"
          onClick={() => setLimit(limit + 5)}
        >
          Show More
        </p>
      </div>
    </div>
  );
};

export default HistoryTransaction;
