import React, { useCallback } from "react";
import app from "../firebase/firebase";
import "../App.css";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
        alert("Account created");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      {/* <header>
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
              <button type="submit" className="login-button">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </header> */}
      <article class="container">
        <form class="row">
          <div class="col-sm-8">
          <h4 className="signup-facebook-help"><strong>Facebook helps you connect and share with the people in your life.</strong></h4>
          <img class="img" src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/OBaVg52wtTZ.png" alt="" width="537" height="195" />
          </div>
          <div class="col-sm-4">
          <h3><strong>Create an account</strong></h3>
          <p>Its quick and easy</p>
            <form onSubmit={handleSignUp} autoComplete="off">
              
              <div class="form-group">
                <label class="control-label">
                  Email Address
                  <input
                  name="email"
                    type="email"
                    class="form-control"
                    placeholder="Email Address"
                  />
                </label>
              </div>

              <div class="form-group">
                <label class="control-label" for="">
                  Password
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    placeholder="Password"
                  />
                </label>
              </div>
              <small>
                By clicking Sign Up, you agree to our Terms and that you have
                read our Data Use Policy, including our Cookie Use.
              </small>
              <hr/>
              <div class="form-group">
                <label class="control-label" for=""></label>
                <button type="submit" class="btn btn-success">Sign up</button>
              </div>
            </form>
          </div>
        </form>
      </article>
    </div>
  );
};

export default SignUp;
