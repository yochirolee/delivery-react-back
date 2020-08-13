import React from "react";

export default function ListProducts({ products, HandleRemove }) {
  return (
    <div className="bg-white h-screen w-full ">
      <div className="bg-gray-800 text-white p-2 h-10 flex flex-row justify-between">
        <p>Productos</p>
        <div>
          <input
            type="text"
            placeholder="Buscar"
            className="rounded px-4"
          ></input>
          <button>
            <i className="fa fa-search mx-4"></i>
          </button>
        </div>
      </div>
      <div className="bg-white  w-full overflow-y-auto flex flex-row flex-wrap">
        {products.map((product) => (
          <div class="  border border-gray-400 h-auto mx-2 my-2 min-w-1/6 ">
            <div class="flex flex-col ">

              <div className="flex flex-row justify-end">
          
                <button
                  onClick={(e) => alert(e.preventDefault())}
                  className="w-8  p-2 text-x font-bold "
                >
                  <i className="fa fa-edit text-green-700"></i>
                </button>

                <button
                  onClick={() => HandleRemove(product)}
                  className="w-8  p-2 text-x font-bold "
                >
                  <i className="fa fa-times text-red-800"></i>
                </button>
              </div>
              <div className="flex flex-col flex-wrap">
                <img
                  class="lg:w-10 lg:h-10 h-4 w-4 mx-auto"
                  src={product.pictureUrl}
                  alt="avatar"
                />
                <div class="text-sm text-center">
                  <p class="block text-gray-700 text-sm font-bold  mb-1">
                    {product.name}
                  </p>
                  <p class="text-gray-700 lg:font-bold leading-none">
                    $ {product.price}
                  </p>
                </div>
              </div>
              <div>
                <p class="text-gray-600 w-24 mx-5 text-center border-t border-dashed mt-2 p-1 leading-none text-xs">
                  {product.ingredients}
                </p>
              </div>
              <div className="mx-5 my-1 flex w-24 border-t border-dashed  justify-between">
                <p class="text-gray-600  text-center  mt-2 p-1 leading-none text-xs">
                  Cant
                </p>
                <p class="text-gray-600  text-center mt-2 p-1 leading-none text-xs">
                  {product.cant}
                </p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
