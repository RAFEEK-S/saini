import React, { useState } from "react";

const Login = () => {
    const [isLogin,setIsLogin] = useState(true);
    
  return <div>
   <button type="button" onClick={ () => setIsLogin(!isLogin)}>{isLogin? "Login" :"LogOut"}</button>
   <p>{isLogin ? "PLEASE LOGIN IN" : "YOU ARE LOGGED IN"}</p>
  </div>;
};

export default Login;
