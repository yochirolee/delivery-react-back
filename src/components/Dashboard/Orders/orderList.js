import React from 'react'

export default function OrderList({ order, HandleOrderDetails }) {
  return (
    <div class="border border-gray-400 mb-2 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col flex-wrap justify-between leading-normal">
      <div class="flex items-center flex-shrink-0 justify-between">
        <div className="flex items-center">
        
          <div class="text-sm w-64">
            <p class="text-gray-800  font-bold mb-1">{order.phone}</p>
            <p class="text-gray-600 leading-none mb-1">{order.name}</p>
            <p class="text-gray-600 text-x ">{order.address}</p>
          </div>
          <p class="text-gray-600 mr-4">{order.region}</p>
        </div>
        <div className="flex flex-row align-center justify-center">
          <span className="flex text-green-600 border-gray-400 border-l  rounded px-2 py-1 text-xs font-bold mr-1">
            {order.status}
          </span>
          <button
            onClick={() => HandleOrderDetails(order)}
            className="flex  p-2 text-x font-bold "
          >
            <i className="fa fa-arrow-right mt-2 text-green-800"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
