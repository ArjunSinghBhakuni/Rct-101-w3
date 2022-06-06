import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const {isAuth,login} = useContext(AuthContext);

  const handleClick = ()=>{
    login()
  }

  return (
    <div>
      <input data-cy="login-email"  type='text' placeholder='type email....'/>
      <input data-cy="login-password"  type='password' placeholder='type pasward...'/>
      <button onClick={handleClick} type="submit"  data-cy="login-submit">Submit</button>
    </div>
  );
};

export default Login;
