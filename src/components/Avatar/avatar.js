import React from 'react';


export default function Avatar({user}){
    return (
        <div className=" items-center bg-gray-800 background h-40 py-4  border-b border-gray-400">
        <div className="rounded-full bg-white mx-auto h-20 w-20">
        <img
          className=" rounded-full relative w-20 h-20 cursor-pointer "
          src={user.photoURL}
          alt="Avatar"
         
        />
        </div>
    <div className='text-center mt-2 text-white font-bold'><h3>{user.displayName}</h3></div>
      </div>
    )
}