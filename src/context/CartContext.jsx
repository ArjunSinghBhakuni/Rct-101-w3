import React, { createContext } from "react";
import { useState } from "react";
import axios from 'axios'
export const CartContext = createContext();

export const CartProvider = ({ children }) => {




  return <CartContext.Provider  >{children}</CartContext.Provider>;
};
