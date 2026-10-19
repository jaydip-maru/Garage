// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";





const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);


  const login = async (userData) => {
    setUser(userData);

   
  };

  const logout = () => {
    setUser(null);

    
  };

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