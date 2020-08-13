import React from 'react';

export default function CardOrdersToday({orders,ordersDone,ordersNew,ordersinProcess}){

    return(
        <div className="lg:w-1/5 w-full rounded bg-white shadow-2xl">
        
        <div className="flex flex-row items-center">
        
          <div className="w-1/2 p-1 text-center text-4xl text-gray-700 font-bold">
            <span>{ordersNew.length}</span>
            <p className='text-muted text-sm text-gray-600'>Ordenes Nuevas</p>
          </div> 
           <div className="w-1/2 p-1 text-center">
            <i className="fa fa-cart-arrow-down text-4xl text-center align-center text-orange-400"></i>
          </div>
        </div>
       
     
       
      </div>
    )
}