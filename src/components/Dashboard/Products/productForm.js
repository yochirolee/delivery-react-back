import React, { useState } from "react";
import { useForm } from "react-hook-form";
import UploadImage from "../../UploadImage/uploadImage";

export default function ProductForm({ HandleSubmit }) {
  const { register, handleSubmit, errors } = useForm();

  const [pictureUrl,setPictureUrl]=useState(null);
  const onSubmit = (data) => {
    if(pictureUrl){
    data.pictureUrl=pictureUrl;
    HandleSubmit(data);}
    else
    alert('image is empty');
  };

  return (
    <div className="p-4 w-full">
      <form
        id="form-product"
        className="mx-10 justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col mt-3 w-full">
          <input
            name="name"
            ref={register({ required: true })}
            className="appearance-none block w-full  text-gray-700 border-b  py-3 px-4  leading-tight focus:outline-none focus:bg-white"
            aria-describedby="nameValidation"
            placeholder="Nombre del Producto"
          ></input>
          <div>
            {errors.name && (
              <small className="text-red-400 mx-auto">This Field is Required.</small>
            )}
          </div>
        </div>

        <div className="flex flex-col mt-3">
          
          <input
            name="price"
            className="appearance-none block w-full  text-gray-700 border-b rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
            placeholder='Precio del Producto'
            ref={register({
              required: true,
              max: 100,
              min: 1,
              maxLength: 5,
              pattern: /(\d+\.\d{2,2})/i,
            })}
          />
          {errors.price && (
            <small className="text-red-400">This Field is Required.</small>
          )}
        </div>

        <div className="flex flex-col mt-3">
          <input
            name="cant"
            placeholder='Cantidad'
            className="appearance-none block w-full  text-gray-700 border-b  rounded py-3 px-4  leading-tight focus:border-none focus:outline-none focus:bg-white"
            ref={register({ required: true })}
            type="number"
          />
          {errors.ingredients && (
            <small className="text-red-400">This Field is Required.</small>
          )}
        </div>
       <div className="flex flex-col mt-3">
        
          <input
            name="ingredients"
            placeholder='Ingredientes'
            className=" w-full  text-gray-700 border-b  rounded  py-3 px-4 leading-tight focus:border-none focus:outline-none focus:bg-white  "
            ref={register({ required: true })}
          />
          {errors.ingredients && (
            <small className="text-red-400">This Field is Required.</small>
          )}
        </div>
        <div className="flex flex-col mt-3">
          <input
            placeholder='Descripcion'
            className="appearance-none block   text-gray-700 border-b  rounded py-3 px-4  leading-tight focus:border-none focus:outline-none focus:bg-white"
            name="description"
            ref={register({ required: true })}
          />
          {errors.description && (
            <small className="text-red-400">This Field is Required.</small>
          )}
        </div>
        <UploadImage setPictureUrl={setPictureUrl}/>

        <div className="flex flex-col mt-3">
          <button
            type="submit"
            className="bg-red-700 mt-4 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}
