import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  userId: "",
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [userId, setUserId] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    const uid = localStorage.getItem("uid");
    if (token) {
      setAuthenticated(true);
      setUserId(uid);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: isAuthenticated, userId: userId }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
