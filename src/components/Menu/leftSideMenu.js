import React from "react";
import {Link} from "react-router-dom";

export default function LeftSideMenu() {
  return (
    <div className=" mx-2 text-gray-600  text-center mt-2">
      <ul>
        <Link>
          <li className="py-2 hover:bg-gray-700 hover: cursor-pointer hover:text-white">
            Ordenes
          </li>
        </Link>
        <Link>
          <li className=" py-2 hover:bg-gray-700 hover: cursor-pointer  hover:text-white">
            Productos
          </li>
        </Link>
        <Link>
          <li className="py-2 hover:bg-gray-700 hover: cursor-pointer  hover:text-white">
            Usuarios
          </li>
        </Link>
      </ul>
    </div>
  );
}
