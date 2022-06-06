import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Product from './Product/Product'

const Products = () => {
 
  const [products ,setProducts]= useState([])
  useEffect(()=>{
axios.get(`http://localhost:8080/products`).then((r)=>setProducts(r.data))
  },[])
 
  return(

    <div> 
     {products.map((e)=>{
        
       return <div key={e.id}>

         <Product  product={e}/>
       </div>
      })}
     </div>
      );
};

export default Products;
