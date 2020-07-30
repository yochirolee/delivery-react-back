import React,{useContext} from "react";
import NavBar from "../NavBar/navBar";
import Avatar from "../Avatar/avatar";
import LeftSideMenu from "../Menu/leftSideMenu";
import Products from "../Products/products";
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/auth';


export default function Dashboard() {
  const {user}=useContext(AuthContext);
  const { removeAuth } = useContext(AuthContext);
  return (
    <div className="w-full  bg-red-800 background h-screen">
      <NavBar removeAuth={removeAuth} user={user} />
      <div className=" flex flex-row flex-wrap">
        <div className="w-1/6 h-screen bg-gray-800 ">
          <Avatar  user={user}/>
          <LeftSideMenu />
        </div>

        <div className="  w-5/6 p-4">
          <Products />
        </div>
      </div>
    </div>
  );
}
