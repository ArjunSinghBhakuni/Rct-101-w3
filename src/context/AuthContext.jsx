import React, { createContext } from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
const navigate = useNavigate()
  const [isAuth,setAuth] = useState(false);

  const toggle =()=>{
    setAuth(!isAuth)
  }
  const login =()=>{
setAuth(true)
navigate('')
  }
  const logout=()=>{
setAuth(false)
navigate('/login')
  }

  return <AuthContext.Provider value={{toggle,login,logout,isAuth}}>{children}</AuthContext.Provider>;
};
