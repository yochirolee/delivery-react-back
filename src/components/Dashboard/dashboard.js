import React from "react";
import NavBar from "../NavBar/navBar";
import Avatar from "../Avatar/avatar";
import LeftSideMenu from "../Menu/leftSideMenu";
import Products from "../Products/products";

export default function Dashboard() {
  return (
    <div className="w-full  bg-red-800 background h-screen">
      <NavBar />
      <div className=" flex flex-row flex-wrap">
        <div className="w-1/6 h-screen bg-gray-800 ">
          <Avatar />
          <LeftSideMenu />
        </div>

        <div className="  w-5/6 p-4">
          <Products />
        </div>
      </div>
    </div>
  );
}
