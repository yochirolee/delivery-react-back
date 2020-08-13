import React, { useState, useEffect } from "react";

export default function ShopStatus() {
  const [shopStatus, setShopStatus] = useState(false);
  const [infoStoreStatus, setInfoStoreStatus] = useState("Store is Closed");
  const [shopDate,setShopDate]=useState(Date());

  const HandleStoreStatus = () => {
    if (!shopStatus) {
      setInfoStoreStatus("Store is Open");
    } else {
      setInfoStoreStatus("Store is Closed");
    }
    setShopStatus(!shopStatus);
  };

  useEffect(() => {
    setInterval(() => {
        setShopDate(
           Date()
        )
      }, 1000)
  }, shopDate);


  return (
    <div className='flex flex-row justify-start items-center'>
      <h2>{shopDate}</h2>
      <div className="w-64 px-10">
        <div
          onClick={HandleStoreStatus}
          className="border-gray-500 border cursor-pointer rounded  align-center px-2 py-2 flex flex-row justify-between"
        >
          <p className="aling-center mx-auto">{infoStoreStatus}</p>
          <div
            className={
              shopStatus
                ? " ml-2 pl-2 border-l  text-green-700"
                : "l ml-2  border-l  pl-2 text-red-700"
            }
          >
            <i className="fa fa-circle"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
