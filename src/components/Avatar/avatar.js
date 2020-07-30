import React from 'react';

export default function Avatar(){
    return (
        <div className=" items-center bg-red-800 py-4 border-r border-gray-800">
        <div className="rounded-full bg-white mx-auto h-20 w-20">
          <p className="text-center items-center">Avatar</p>
        </div>
        <div className='text-center mt-2 text-white font-bold'><h3>Name</h3></div>
      </div>
    )
}