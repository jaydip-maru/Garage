// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";




const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);



  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
   
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    
  };


  // useEffect(() => {
  //   console.log("Updated user:", user);
  // }, [user]);





  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

  // custom hook
  export function useAuth() {
    return useContext(AuthContext)
  }