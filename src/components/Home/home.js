import React, { useEffect, useState, useContext } from "react";
import NavBar from "../NavBar/navBar";
import { Firebase } from "../../lib/firebase";
import { AuthContext } from "../../context/auth";
import { useHistory, useLocation } from "react-router-dom";

export default function Home() {
  const firebase = new Firebase();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { activateAuth, userLoaded } = useContext(AuthContext);
  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    redirectIfAuthenticated();
  }, []);

  const redirectIfAuthenticated = () => {
    if (userLoaded) {
      history.replace("/dashboard");
      return true;
    }
    return false;
  };

  const saveAuthAndRedirect = (data) => {
    try {
      const { user } = data;
      let { idToken = null } = data;
      if (!idToken) idToken = user.uid;
      activateAuth(user, idToken);
      setLoading(false);
      history.replace("/dashboard");
    } catch (error) {
      console.log({ error });
    }
  };

  const authWithGoogle = () => {
    setLoading(true);
    firebase.doAuthWithGoogle().then((resp) => {
      setLoading(false);
      saveAuthAndRedirect(resp);
    });
  };

  return (
    <div className="h-screen bg-red-700 background">
      <NavBar  />
      <div className="lg:w-1/4 bg-white rounded lg:mx-auto mx-6 p-4 my-20 lg:p-4 ">
        <div className="flex flex-col">
          <input
            type="text"
            className="h-10 mb-4 border-b  px-4 border-gray-500"
            placeholder="Email"
          ></input>
          <input
            type="password"
            className="h-10 mb-4 border-b px-4 border-gray-500"
            placeholder="Password"
          ></input>
          <button className="bg-orange-600 mt-2 mb-4 text-white py-2 px-4 ">
            <i className="fa fa-lock mr-4"></i>
            Login
          </button>
        </div>
        <div className=" py-2 flex mb-2">
          <p className="mx-auto font-bold">or</p>
        </div>
        <div className="flex flex-col">
          <button
            onClick={authWithGoogle}
            className="bg-gray-700  text-white py-2 px-4"
          >
            <i className="fab fa-google mr-4"></i>
            Login with Google
          </button>
          <button className="bg-blue-700 mt-4 text-white py-2 px-4">
            <i className="fab fa-facebook mr-4"></i>
            Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
