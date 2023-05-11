import React from "react";
import { useNavigate } from "react-router-dom";

function Login({ isAuth, setIsAuth }) {
  let navigate = useNavigate();

  return (
    <div className="loginPage">
      <p>Sign In with google to continue</p>
      {/* <button className="btn" onClick={signInWithGoogle}>
        Login
      </button> */}
    </div>
  );
}

export default Login;
