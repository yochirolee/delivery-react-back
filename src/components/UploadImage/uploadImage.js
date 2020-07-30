import React, { useState, useEffect } from "react";
import { storage, db } from "../../firebase";
import firebase from "firebase";

export default function UploadImage({ setPictureUrl }) {
 let image=null;
  const [isUploading, setIsUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {}, [imageUrl]);

  const HandleOnChange = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      image = e.target.files[0];

      setIsUploading(true);
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        function (snapshot) {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (progress === 100) {
            setIsUploading(false);
          }
        },
        (error) => {
          console.log(error.code);
        },
        () => {
          //complete function
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              db.collection("productsImages").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                url: url,
              });
              setImageUrl(url);
              image=null;
              setPictureUrl(url)
            });

        
        }
      );
    }
  };

  return (
    <div className="flex flex-row  mb-4 mt-4 ">
      <div className="py-2 w-2/4 ml-4">
        {isUploading ? (
          <div className="mt-1  w-20 h-20 ">
            <p className="text-xs bold   text-gray-500 mx-auto my-auto">
              ...Uploading
            </p>
          </div>
        ) : imageUrl ? (
          <img
            alt="productImage"
            className=" m-2 w-20 h-20 rounded-full"
            src={imageUrl}
          ></img>
        ) : (
          <div className="m-1 w-20 h-20 rounded-full bg-gray-200"></div>
        )}
      </div>

      <div className="flex flex-col h-10 px-8 mt-6 ">
        <label className="bg-orange-500 w-20 rounded mx-auto text-white my-2 py-2 cursor-pointer">
          <input
            id="fileInput"
            className="hidden mx-auto "
            type="file"
            onChange={HandleOnChange}
          />
          <i className="fa fa-cloud-upload-alt ml-8 "></i>
        </label>
      </div>
    </div>
  );
}
