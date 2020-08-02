import React, { useContext, useState, useEffect } from "react";
import OrderList from "./orderList";
import OrderDetailsView from "./orderDetailView";
import OrdersStatus from "./ordersStatus";
import firebase from "firebase/app";
import "firebase/firestore";
import Spiner from "../../Spiner/spiner";


export default function Orders() {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
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
      });

    return () => unsubcribe();
  }, []);

  const HandleStatus = (order) => {
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

    firebase.firestore().collection("orders").doc(order.id).set(auxOrder);
  };

  const HandleOrderDetails = (order) => {
    setOrderDetails(order);
  };
  return (
    <div>
      <h2 className="text-white border-b border-gray-500 mb-2">Orders</h2>
      <div>
        {loading ? (
         <Spiner/>
         
        ) : (
          <div className="flex lg:flex-row md:flex-col flex-col-reverse">
            <div class="  mx-2  lg:mx-10 ">
              {orders.map((order) =>
                order.status != "transportando" ? (
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
            <div className="w-full mb-4">
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
