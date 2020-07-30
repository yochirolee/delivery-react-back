import React from 'react';

export default function LeftSideMenu(){

    return (
        
        <div className=" mx-2 text-gray-600  text-center mt-2">
        <ul>
          <li className='py-2 hover:bg-gray-700 hover: cursor-pointer hover:text-white'>Ordenes</li>
          <li className=' py-2 hover:bg-gray-700 hover: cursor-pointer  hover:text-white'>Productos</li>
          <li className='py-2 hover:bg-gray-700 hover: cursor-pointer  hover:text-white'>Usuarios</li>
          
        </ul>
      </div>
    )

}