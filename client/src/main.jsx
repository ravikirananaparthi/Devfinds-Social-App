import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createContext } from "react";
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_Measurement_Id,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const server = import.meta.env.VITE_SERVER_VARIABLE;

export const Context = createContext({ isAuthenticated: false });

const Appwraper = () => {
  const [isAuthenticated, setAuth] = useState(false);
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [t, st] = useState("light");
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setAuth,
        loader,
        setLoader,
        user,
        setUser,
        posts,
        setPosts,
        t,
        st,
        isAdmin,
        setIsAdmin,
      }}
    >
      <App className="bg-gradient-to-r from-[#4b6cb7] to-[#182848]" />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Appwraper className="bg-gradient-to-r from-[#4b6cb7] to-[#182848]" />
  </React.StrictMode>
);
