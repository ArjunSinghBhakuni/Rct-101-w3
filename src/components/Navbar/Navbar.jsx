import React from "react";
import { useContext } from "react";
import {Link} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
 
// use react-router Link or NavLink
 

const Navbar = () => {
 
  const {isAuth,logout,login } = useContext(AuthContext)

  const handleClick =()=>{
    if(isAuth){
      logout()
    }
     
    
  }
  return (
    <div data-cy="navbar">
      <Link to='' data-cy="navbar-home-link">Logo</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button onClick={handleClick} data-cy="navbar-login-logout-button"> {isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
