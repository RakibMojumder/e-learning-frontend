"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AUTH_CONTEXT = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, []);

  const value = { token, userEmail, setToken, setUserEmail };

  return (
    <AUTH_CONTEXT.Provider value={value}>{children}</AUTH_CONTEXT.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AUTH_CONTEXT);
};

export default AuthProvider;
