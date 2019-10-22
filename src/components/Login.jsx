<<<<<<< HEAD
=======
import React, { useCallback, useContext } from "react";
import { Redirect } from "react-router";
import app from "../firebase/firebase";
import { AuthContext } from "../firebase/auth";
>>>>>>> 529254bda9e6f2872c8e482bb2016521db5e18ab
import "../App.css";
import axios from "axios";
import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

<<<<<<< HEAD
class login extends Component {
  state = {
    email: "",
    password: "",
    loading: false,
    errors: {}
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("/login", userData)
      .then(res => {
        console.log(res.data.token);
        // console.log(res.data);
        this.setState({
          loading: false
        });
        const FBIdToken = `Bearer ${res.data.token}`;
        localStorage.setItem("FBIdToken", FBIdToken);
        this.props.history.push("/user");
        window.location.reload();
      })
      .catch(err => {
        this.setState({
          errors: err.response.data,
          loading: false
        });
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { errors, loading } = this.state;
    return (
      <header>
        <div className="login-header">
          <div className="facebook-logo"></div>

          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="user-input-login">
              <label>
                Email or phone
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Password
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </label>
              {errors.general && <p>{errors.general}</p>}
              <button type="submit" className="login-button" disabled={loading}>
                Log in
                {loading && <CircularProgress />}
              </button>
            </div>
          </form>
        </div>
      </header>
    );
=======
const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/homepage");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/homepage" />;
>>>>>>> 529254bda9e6f2872c8e482bb2016521db5e18ab
  }
}

<<<<<<< HEAD
export default login;
=======
  return (
    <header>
      <div className="login-header">
        <div className="facebook-logo"></div>

        <form autoComplete="off" onSubmit={handleLogin}>
          <div className="user-input-login">
            <label>
              Email or phone
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </label>
            <label>
              Password
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </label>
            <button type="submit" className="login-button">
              Log in
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Login;
>>>>>>> 529254bda9e6f2872c8e482bb2016521db5e18ab
