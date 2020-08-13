import React, { useContext, useState, useEffect } from "react";
import OrderList from "./orderList";
import OrderDetailsView from "./orderDetailView";
import firebase from "firebase/app";
import "firebase/firestore";
import Spiner from "../../Spiner/spiner";
import "./order.css";
import { findDOMNode } from "react-dom";

export default function Orders() {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [searchOrder, setSearchOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    setLoading(true);
    const unsubcribe = firebase
      .firestore()
      .collection("orders")
      .orderBy("date", "desc")
      .onSnapshot(async (snapshot) => {
        const orders = await snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setOrders(orders);
        setLoading(false);
        orders.forEach((order) => {
          order.active = false;
        });
      });

    return () => unsubcribe();
  }, []);

  const HandleStatus = async (order) => {
    let auxOrder = order;
    switch (auxOrder.status) {
      case "New":
        auxOrder.status = "aceptada";
        break;
      case "aceptada":
        auxOrder.status = "en proceso";
        break;
      case "en proceso":
        auxOrder.status = "transportando";
        break;

      default:
        break;
    }
    auxOrder.active = false;
    await firebase.firestore().collection("orders").doc(order.id).set(auxOrder);
  };

  const HandleOrderDetails = (order) => {
    orders.forEach((order) => {
      order.active = false;
    });
    order.active = true;
    setOrderDetails(order);
  };

  const HandleSearch = (e) => {
    e.preventDefault();
    let search = e.target.value;
    console.log(search);
    const result = [];
    let finded = orders.filter((order) => order.phone === search);
    if (finded.length > 0) setSearchOrders(finded);
    console.log(result);
  };

  return (
    <div>
      <h2 className="text-white border-b border-gray-500 mb-2">Orders</h2>
      <div>
        {loading ? (
          <Spiner />
        ) : (
          <div className="flex lg:flex-row md:flex-col flex-col-reverse px-2">
            <div class="  px-2   lg:mx-10 overflow-y-auto overflow-x-hidden h-screen lg:w-1/2">
              <div className='bg-gray-800 my-2 p-2 text-white '>
              <input
                type="text"
                placeholder="Buscar"
                className="rounded px-4 text-gray-600"
                onChange={(e) => HandleSearch(e)}
              ></input>
              <button>
                <i className="fa fa-search mx-4"></i>
              </button>
              </div>

              {orders.map((order) =>
                order.status != "done" ? (
                  <div>
                    <OrderList
                      order={order}
                      searchOrder={searchOrder}
                      HandleOrderDetails={HandleOrderDetails}
                    />
                  </div>
                ) : (
                  <div></div>
                )
              )}
            </div>
            <div className="w-full mb-4 lg:w-1/2">
              <OrderDetailsView
                orderDetails={orderDetails}
                HandleStatus={HandleStatus}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * <div>
      <h2 className="text-white border-b border-gray-500 mb-2">Orders</h2>
      <div>
        {loading ? (
         <Spiner/>
         
        ) : (
          <div className="flex lg:flex-row md:flex-col flex-col-reverse px-2">
            <div class="  px-2   lg:mx-10 overflow-y-auto overflow-x-hidden h-screen lg:w-1/2">
              {orders.map((order) =>
                order.status != "done" ? (
                  <div>
                    <OrderList
                      order={order}
                      HandleOrderDetails={HandleOrderDetails}
                    />
                  </div>
                ) : (
                  <div></div>
                )
              )}
            </div>
            <div className="w-full mb-4 lg:w-1/2">
              <OrderDetailsView
                orderDetails={orderDetails}
                HandleStatus={HandleStatus}
              />
            </div>
          </div>
        )}
      </div>
    </div>
 */
