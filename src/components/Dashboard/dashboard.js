import React, { useContext } from "react";
import NavBar from "../NavBar/navBar";
import Avatar from "../Avatar/avatar";
import LeftSideMenu from "../Menu/leftSideMenu";
import Products from "./Products/products";
import { AuthContext } from "../../context/auth";
import Main from "./Main/main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Orders from "./Orders/orders";
import PrivateRoute from '../login/privateRoute';
import Users from "./Users/users";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const { removeAuth } = useContext(AuthContext);
  return (
    <div className="w-full h-full bg-red-800 background ">
      <NavBar removeAuth={removeAuth} user={user} />
      <div className=" flex flex-row flex-wrap">
        <div className="w-1/6 h-screen bg-gray-800 ">
          <Avatar user={user} />
          <LeftSideMenu />
        </div>

        <div className="  w-5/6 p-4">
          <Switch>
            <PrivateRoute exact path="/dashboard">
              <Main />
            </PrivateRoute>
            <Route path="/dashboard/products">
              <Products />
            </Route>
            <Route path="/dashboard/orders">
              <Orders />
            </Route>
            <Route path="/dashboard/users">
              <Users />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
