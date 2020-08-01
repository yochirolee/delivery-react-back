import React from "react";
import { Link } from "react-router-dom";

export default function LeftSideMenu() {
  return (
    <div className=" mx-2 text-gray-400  text-center mt-2">
      <ul>
        <Link to={"/dashboard"}>
          <li className="py-2 hover:bg-gray-700 hover: cursor-pointer  hover:text-white">
            Main
          </li>
        </Link>
        <Link to={"/dashboard/orders"}>
          <li className="py-2 hover:bg-gray-700 hover: cursor-pointer hover:text-white">
            Ordenes
          </li>
        </Link>
        <Link to={"/dashboard/products"}>
          <li className=" py-2 hover:bg-gray-700 hover: cursor-pointer  hover:text-white">
            Productos
          </li>
        </Link>
        <Link to={"/dashboard/users"}>
          <li className="py-2 hover:bg-gray-700 hover: cursor-pointer  hover:text-white">
            Usuarios
          </li>
        </Link>
      </ul>
    </div>
  );
}
