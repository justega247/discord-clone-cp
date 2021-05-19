import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://logos-download.com/wp-content/uploads/2021/01/Discord_Logo_full.png"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign In here</Button>
    </div>
  );
}

export default Login;
