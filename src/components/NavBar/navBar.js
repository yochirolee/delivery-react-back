import React from "react";

export default function NavBar({ user, removeAuth }) {
  return (
    <nav>
      <div className="bg-gray-800 h-12 items-center  flex">
        <div className="flex flex-row w-full flex-wrap lg:justify-between  mx-20  text-white">
          <div className="">Logo</div>
          {user ? (
            <div>
              <button
                onClick={removeAuth}
                className="bg-orange-600 hover:bg-orange-500 px-4 py-1 rounded"
              >
                <i className="fa fa-sign-out-alt mr-2"> </i>Salir
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
