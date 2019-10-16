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
        history.push("/homepage");
        alert("Account created");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      
      <article className="container">
        <div className="row">
          <div className="col-sm-8">
          <h4 className="signup-facebook-help"><strong>Facebook helps you connect and share with the people in your life.</strong></h4>
          <img className="img" src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/OBaVg52wtTZ.png" alt="" width="537" height="195" />
          </div>
          <div className="col-sm-4">
          <h3><strong>Create an account</strong></h3>
          <p>Its quick and easy</p>
            <form onSubmit={handleSignUp} autoComplete="off">
              
              <div className="form-group">
                <label className="control-label text-dark">
                  Email Address
                  <input
                  name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </label>
              </div>

              <div className="form-group">
                <label className="control-label text-dark">
                  Password
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </label>
              </div>
              <small>
                By clicking Sign Up, you agree to our Terms and that you have
                read our Data Use Policy, including our Cookie Use.
              </small>
              <hr/>
              <div className="form-group">
                <label className="control-label" ></label>
                <button type="submit" className="btn btn-success">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SignUp;
