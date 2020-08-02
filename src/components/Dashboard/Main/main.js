import React from "react";

export default function Main() {
  return (
    <div>
      <h2 className="text-white border-b border-gray-500 mb-2">Main</h2>
      <div className=" lg:mx-10">
        <div className="flex flex-row flex-wrap lg:justify-evenly bg-gray-200 p-2 gap-1 mx-4">
          <div className="lg:w-1/5 w-full rounded bg-white shadow-2xl">
            <div className="py-2 bg-gray-700 rounded-t text-white text-sm font-bold text-center">
              Total de Ordenes
            </div>
            <div className="flex flex-row items-center">
              <div className="w-1/2 p-1 text-center">
                <i className="fa fa-cart-arrow-down text-4xl text-center align-center text-orange-400"></i>
              </div>
              <div className="w-1/2 p-1 text-center text-4xl text-gray-700 font-bold">
                <span>13</span>
              </div>
            </div>
            <div className="flex flex-row mx-4 font-bold text-gray-700 text-sm justify-between ">
              <div>
                <p>Nuevas</p>
              </div>
              <div>
                <p>10</p>
              </div>
            </div>
            <div className="flex flex-row mx-4 font-bold text-gray-700 text-sm justify-between ">
              <div>
                <p>En Proceso</p>
              </div>
              <div>
                <p>10</p>
              </div>
            </div>
            <div className="flex flex-row mx-4 font-bold text-gray-700 text-sm justify-between mb-4">
              <div>
                <p>Enviadas</p>
              </div>
              <div>
                <p>10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
