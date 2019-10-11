import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../firebase/firebase";
import "../App.css";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
      alert("Account created")
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <header>
      <div className="login-header">
        <div className="facebook-logo"></div>

        <form autocomplete="off" onSubmit={handleSignUp}>
          <div className="user-input-login">
            <label>
              Email or phone
              <input name="email" type="email" placeholder="Email" />
            </label>
            <label>
              Password
              <input name="password" type="password" placeholder="Password" />
            </label>
            <button type="submit" className="login-button">Sign up</button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default withRouter(SignUp);