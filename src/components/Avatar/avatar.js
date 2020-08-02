import React from 'react';


export default function Avatar({user}){
    return (
        <div className=" items-center bg-gray-800 background lg:h-40 h-32 py-4  border-b border-gray-400">
        <div className="rounded-full bg-white mx-auto lg:h-20 lg:w-20 w-8 h-8 ">
        <img
          className=" rounded-full relative lg:w-20 lg:h-20 w-8 h-8 cursor-pointer "
          src={user.photoURL}
          alt="Avatar"
         
        />
        </div>
    <div className='text-center mt-2 text-white font-bold'><h3>{user.displayName}</h3></div>
      </div>
    )
}