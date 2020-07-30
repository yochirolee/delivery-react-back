import React from 'react';

export default function NavBar(){

    return(
        <nav>
        <div className="bg-gray-800 h-12 items-center  flex">
          <div className="flex flex-row w-full flex-wrap justify-between mx-20  text-white">
            <div className="">Logo</div>
            <div className="w-1/3 flex flex-row justify-between">
              <div>Actions</div>
               <div>Avatar</div>
              <div>A Others</div>
            </div>
          </div>
        </div>
      </nav>
    )


}