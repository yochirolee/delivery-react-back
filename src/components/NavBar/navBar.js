import React from "react";

export default function NavBar({ user, removeAuth }) {
  return (
    <nav>
      <div className="bg-gray-800 h-12 items-center  flex">
        <div className="flex flex-row w-full flex-wrap lg:justify-between justify-between  lg:mx-4 mx-4  text-white">
          <div className="font-bold text-xl ">Delivery Panel 2.0</div>
          {user ? (
            <div>
              <button
                onClick={removeAuth}
                className="bg-orange-600 hover:bg-orange-500 lg:px-4 px-2 py-1 rounded"
              >
                <i className="fa fa-sign-out-alt mr-2"> </i><a className='hidden lg:inline'>Salir</a>
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
}
