import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from "react";
const Product = ({product}) => {
  // Note: this id should come from api
 const {CartCount ,setCartCount } = useState(1)
 const [cart,setCart ] = useState([])
 const {id} = useParams();

 useEffect(()=>{
  axios.get(`http://localhost:8080/cartItems/`)
  .then((r)=>{
    setCart(r.data)
  })
 },[])
 const handleCart = (id)=>{
    if(id){
      axios.get(`http://localhost:8080/products/${id}`)
      .then((r)=>{
    
        axios.post(`http://localhost:8080/cartItems`,{
          productId:r.data.id ,
          count:CartCount ,
          id: r.data.id
          
        }).then((r)=>console.log(r))
      })
    }
    } 
    const handleRemove = (id) => {
      console.log(id)
     axios.delete(`http://localhost:8080/cartItems/${id}` )  
    
       .then(function(response) {
        // console.log(response.data)
         
  axios.get(`http://localhost:8080/cartItems/`)
  .then((r)=>{
    setCart(r.data)
  })
         
       }).catch(function(error) {
         console.log(error)
    console.log(cart)
       })
     }
  
 
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
    {cart.length<1?  <button onClick={()=>handleCart(product.id)} data-cy="product-add-item-to-cart-button">add to cart </button>
     : <div>
        <button data-cy="product-increment-cart-item-count-button">-</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">+</button>
        <button onClick={handleRemove} data-cy="product-remove-cart-item-button">remove</button>
      </div>}
    </div>
  );
};

export default Product;
