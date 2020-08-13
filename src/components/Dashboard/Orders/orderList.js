import React, { useState, useEffect } from "react";
import moment from "moment";

export default function OrderList({ order, HandleOrderDetails, searchOrder }) {
  const [colorStatus, setColorStatus] = useState("");

  useEffect(() => {
    let color = colorOrderStatus();
    setColorStatus(color);
    console.log(color);
  });

  const colorOrderStatus = () => {
    let color = "";
    switch (order.status) {
      case "New":
        color = "pink-600";
        break;

      case "en proceso":
        color = "blue-600";
        break;
      case "aceptada":
        color = "green-600";
        break;

      case "transportando":
        color = "gray-600";
        break;

      default:
        break;
    }

    return color;
  };

  return (
    <div>
      <div className={`flex  mb-2 flex-row bg-white items-center rounded justify-between ${order.status==='transportando'?('opacity-50'):('')}`}>
        <div
          className={` border-r text-center font-bold border-dashed px-4 lg:w-1/3 bg-${colorStatus} text-gray-300 `}
        >
          <p className="text-muted  text-2xl  ">
            {order.phone}
          </p>
          <p className="text-muted text-xs ">{order.name}</p>
        
        </div>

        <div className="py-2 pl-2   text-xl flex  flex-col mx-auto w-1/2  ">
          <p className=" text-gray-600  text-sm font-bold">{order.status}</p>
          <p className=" lg:text-xs lg:block hidden text-gray-600">{order.address}</p>
        </div>

        <div
          className={` lg:w-2/6 text-xs  ${
            order.active ? " border-r-8 " : ""
          }  items-center rounded-r p-2 cursor-pointer flex flex-col border-${colorStatus}`}
          onClick={() => HandleOrderDetails(order)}
        >
        

          <div className={`text-xl mt-1 text-${colorStatus}`}>
            <i className="fa fa-arrow-alt-circle-right text-xl mt-1"></i>
          </div>
          <p className="text-gray-700 lg:block hidden">
            {moment(order.date.toDate(), "YYYYMMDD").fromNow()}
          </p>
          <p className="text-muted text-xs my-auto lg:block hidden ">
            {order.region}
          </p>
        </div>
      </div>
    </div>

    /*  <div class="border border-gray-400 mb-2 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col flex-wrap  justify-between leading-normal">
      <div class="flex items-center flex-shrink-0 justify-between">
        <div className="flex items-center w-full justify-between ">
          <div class="text-sm lg:w-64">
            <p class="text-gray-800  font-bold mb-1">{order.phone}</p>
            <p class="text-gray-600 leading-none mb-1">{order.name}</p>
            <p class="text-gray-600 text-x  ">{order.address}</p>
          </div>
          <div className='flex flex-col mr-4 '>
            <p class="text-gray-600 mr-4 ">{order.region}</p>
            <p className="text-gray-600 text-sm">
             
              {moment(order.date.toDate(), "YYYYMMDD").fromNow()}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center border-l border-gray-400 w-24">
          <span className="flex text-green-600  px-auto py-1 ml-2 text-xs font-bold mr-1">
            {order.status}
          </span>
          <button
            onClick={() => HandleOrderDetails(order)}
            className=" mx-auto text-x font-bold w-8 w-8 "
          >
            <i className="fa fa-arrow-right mt-2 text-green-800"></i>
          </button>
        </div>
      </div>
    </div>
    */
  );
}
