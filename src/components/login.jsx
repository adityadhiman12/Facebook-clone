import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../firebase/firebase";
import { AuthContext } from "../firebase/auth";
import "../App.css";





const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );


  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <header>
      <div className="login-header">
        <div className="facebook-logo"></div>

        <form autoComplete="off" onSubmit={handleLogin}>
          <div className="user-input-login">
            <label>
              Email or phone
              <input name="email" type="email" placeholder="Email" />
            </label>
            <label>
              Password
              <input name="password" type="password" placeholder="Password" />
            </label>
            <button type="submit" className="login-button">Log in</button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default withRouter(Login);