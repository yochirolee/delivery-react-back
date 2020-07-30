import React, { useState, useEffect } from "react";
import UploadImage from "../../UploadImage/uploadImage";
import ProductForm from "./productForm";
import ListProducts from "./listProducts";
import { db } from "../../../firebase";
import firebase from "firebase";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsubcribe = firebase
      .firestore()
      .collection("products")
      .onSnapshot((snapshot) => {
        const newProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(newProducts);
        setLoading(false);
      });

    return () => unsubcribe();
  }, []);

  const HandleSubmit = (data) => {
    firebase.firestore().collection("products").add(data);
    document.getElementById("form-product").reset();
  };

  const HandleRemove = (product) => {
    db.collection("products")
      .doc(product.id)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <div className="w-full">
      <h2 className='text-white border-b border-gray-700 mb-2'>Products</h2>
      <div className="flex flex-row">
        <div className="w-1/3 rounded bg-white mx-4">
          <ProductForm HandleSubmit={HandleSubmit} />
        </div>
        <div className='w-2/3'>
          <ListProducts products={products} HandleRemove={HandleRemove} />
        </div>
      </div>
    </div>
  );
}
