import React, { useState, useEffect } from "react";
import moment from "moment";

export default function OrderList({ order, HandleOrderDetails }) {
  const [colorStatus, setColorStatus] = useState('');

  useEffect(() => {
   let color= colorOrderStatus();
   setColorStatus(color)
   console.log(color);
  });

  const colorOrderStatus = () => {
    let color=''
    switch (order.status) {
      case "New":
        color='pink-600';
        break;

      case "en proceso":
        color='blue-600';
        break;
      case "aceptada":
        color='orange-600';
        break;

      case "transportando":
        color="green-600";
        break;

      default:
        break;
    }
   
    return color
  };

  return (
    <div >
      <div className= {'flex  mb-2 flex-row bg-white rounded justify-between'}>
        <div className="p-2 border-r border-dashed px-4 w-1/3 my-auto">
          <p className="text-muted text-gray-700 font-bold">{order.phone}</p>
          <p className="text-muted text-xs text-gray-700">{order.name}</p>
        </div>

        <div className="py-2 align-left flex  flex-col  justify-start">
          <p className="text-muted text-gray-700 my-auto ">
            <i className="fa fa-location-arrow mx-2 text-pink-700 "></i>
            Playa
          </p>
          <p className="text-muted text-xs text-gray-600">{order.address}</p>
        </div>

        <div
            className= {` w-30 text-xs border-r-8  ${order.active?('bg-gray-700 text-white'):('')}  items-center rounded-r p-2 cursor-pointer flex flex-col border-${colorStatus}`}
             onClick={() => HandleOrderDetails(order)}
        >
          <p className= {order.active?('bg-gray-700 text-white'):('text-gray-700')}>{order.status}</p>
        
        
          <div className={`text-xl mt-1 text-${colorStatus}`}>
          <i
            className='fa fa-arrow-alt-circle-right text-xl mt-1'
          ></i>
         </div>
          <p className={order.active?('bg-gray-700 text-white'):('text-gray-700 text-muted')}>
            {moment(order.date.toDate(), "YYYYMMDD").fromNow()}
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
