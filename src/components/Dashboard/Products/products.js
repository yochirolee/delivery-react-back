import React, { useState, useEffect } from "react";
import ProductForm from "./productForm";
import ListProducts from "./listProducts";
import { db } from "../../../firebase";
import firebase from "firebase";
import Spiner from '../../Spiner/spiner';

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
      <h2 className="text-white border-b border-gray-100 mb-2">Products</h2>
      {loading ? (
       <Spiner/>
      ) : (
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-1/4 rounded bg-white mx-4 mb-4">
            <ProductForm HandleSubmit={HandleSubmit} />
          </div>
          <div className="lg:w-3/4 flex flex-row">
            <ListProducts products={products} HandleRemove={HandleRemove} />
          </div>
        </div>
      )}
    </div>
  );
}
