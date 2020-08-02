import React from "react";

export default function ListProducts({ products, HandleRemove }) {
  return (
    <div className="bg-white h-screen overflow-scroll">
      <p className="bg-gray-800 text-white plg:p-2 h-8">Lista de Productos</p>
      {products.map((product) => (
        <div class="border-b border-gray-400 lg:mb-2 lg:mx-8 lg:border-gray-400 bg-white  lg:p-4 flex flex-col justify-between ">
          <div class="flex items-center justify-between">
            <div className="flex items-center">
              <img
                class="lg:w-10 lg:h-10 h-4 w-4 mr-4"
                src={product.pictureUrl}
                alt="avatar"
              />
              <div class="text-sm lg:w-64">
                <p class="block text-gray-700 text-sm font-bold  mb-1">
                  {product.name}
                </p>
                <p class="text-gray-700 lg:font-bold leading-none">
                  $ {product.price}
                </p>
              </div>
            </div>
            <div>
              <p class="text-gray-600 leading-none text-xs">
                {product.ingredients}
              </p>
            </div>
            <div className="flex flex-row">
              <span className="flex rounded-full bg-orange-500 border text-white  px-2 py-1 text-xs font-bold mr-3">
                {product.cant}
              </span>
              <button
                onClick={() => HandleRemove(product)}
                className="flex  p-2 text-x font-bold "
              >
                <i className="fa fa-times text-red-800"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
