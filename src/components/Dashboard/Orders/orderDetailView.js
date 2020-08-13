import React from "react";

export default function OrderDetailsView({ orderDetails, HandleStatus }) {
  return (
    <div className="flex flex-col  bg-white py-4 px-8 ">

      <span className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2">
       <i className='fa fa-phone-square-alt mr-1 opacity-25'></i> {orderDetails.phone}
      </span>

      <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      <i className='fa fa-user mr-2 opacity-25'></i> {orderDetails.name}
      </span>

      <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      <i className='fa fa-address-card mr-2 opacity-25'></i>
        {orderDetails.address}
      </span>

      {orderDetails.products ? (
        orderDetails.products.map((product, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center aling-center text-gray-700 text-xs font-bold py-2 mr-4 border-t"
          >
            <p className="">{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))
      ) : (
        <p></p>
      )}

   
        {orderDetails.status ? (
          <div className='flex flex-col  mt-4  border-t'>
           
            <button
              onClick={() => HandleStatus(orderDetails)}
              className="border-none w-64 mt-8 mx-auto bg-gray-700 p-2  rounded text-white"
            >
              {orderDetails.status}
            </button>
          </div>
        ) : (
          <div></div>
        )}
     
    </div>
  );
}
