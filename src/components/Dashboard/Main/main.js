import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import Spiner from "../../Spiner/spiner";
import CardOrdersTotal from "./CardOrdersTotal";
import CardOrdersToday from "./CardOrdersToday";
import moment from "moment";
import ShopStatus from "../../ShopStatus/shopStatus";

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [ordersNew, setOrdersNew] = useState([]);
  const [ordersinProcess, setOrdersInProcess] = useState([]);
  const [ordersDone, setOrdersDone] = useState([]);

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
      });

    return () => unsubcribe();
  }, []);

  useEffect(() => {
    OrderByDateAndStatus();
  }, [orders]);

  const OrderByDateAndStatus = () => {
    let aux_orders_new = [];
    let aux_orders_proccess = [];
    let aux_orders_done = [];

    orders.forEach((order) => {
      switch (order.status) {
        case "New":
          console.log(order.date);
          console.log(moment.now());
          aux_orders_new.push(order);
          break;

        case "en proceso":
          aux_orders_proccess.push(order);
          break;

        case "transportando":
          aux_orders_done.push(order);
          break;

        default:
          break;
      }
    });

    setOrdersNew(aux_orders_new);
    setOrdersInProcess(aux_orders_proccess);
    setOrdersDone(aux_orders_done);
  };

  return (
    <div className='flex flex-col'>
      <h2 className="text-white border-b border-gray-500 mb-2">Main</h2>

      <div className='bg-white p-4 '>
        <ShopStatus/>
      </div>



      {loading ? (
        <Spiner />
      ) : (
        <div className=" lg:mx-10 mt-10">
          <div className="flex flex-row flex-wrap lg:justify-evenly  p-2 gap-1 mx-4">
            <CardOrdersToday
              ordersNew={ordersNew}
              
            />
            <CardOrdersToday
              ordersNew={ordersNew}
              
            />
            <CardOrdersToday
              ordersNew={ordersNew}
              
            />
            <CardOrdersToday
              ordersNew={ordersNew}
              
            />
        
          </div>
        </div>
      )}
    </div>
  );
}
