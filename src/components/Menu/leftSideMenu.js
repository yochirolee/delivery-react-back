import React from "react";
import { Link } from "react-router-dom";

export default function LeftSideMenu() {
  return (
    <div className=" lg:mx-2 text-gray-400 h-screen  mt-2">
      <ul >
        <Link to={"/dashboard"}>
        <li className="py-2 flex flex-row items-center lg:justify-start lg:pl-4 justify-center hover:bg-gray-700 hover: cursor-pointer  hover:text-white">
          <i className='fa fa-home mr-2'></i>
           <a className='hidden lg:flex'> Main</a>
          </li>
        </Link>
        <Link to={"/dashboard/orders"}>
        <li className="py-2 flex flex-row items-center  lg:justify-start lg:pl-4 justify-center hover:bg-gray-700 hover: cursor-pointer  hover:text-white">
        <i className='fa fa-clipboard-list mr-2'></i>
        <a className='hidden lg:flex'>Ordenes</a> 
          </li>
        </Link>
        <Link to={"/dashboard/products"}>
        <li className="py-2 flex flex-row items-center lg:justify-start lg:pl-4 justify-center hover:bg-gray-700 hover: cursor-pointer  hover:text-white">
         <i className='fa fa-shopping-bag mr-2'></i>
           <a className='hidden lg:flex'>Productos</a> 
          </li>
        </Link>
        <Link to={"/dashboard/users"}>
        <li className="py-2 flex flex-row items-center lg:pl-4 active:gb-white lg:justify-start justify-center hover:bg-gray-700 hover: cursor-pointer  hover:text-white">
         <i className='fa fa-users mr-2'></i>
           <a className='hidden lg:flex'>Usuarios</a> 
          </li>
        </Link>
      </ul>
    </div>
  );
}
