import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

<<<<<<< HEAD
class Signup extends Component {
  state = {};
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    handle: "",
    loading: false,
    errors: {}
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle
    };
    axios
      .post("/signup", newUserData)
      .then(res => {
        localStorage.setItem("FBIdToken", `Bearer ${res.data.token}`);
        console.log(res.data);
        this.setState({
          loading: false
        });
        this.props.history.push("/");
        window.location.reload();
      })
      .catch(err => {
        this.setState({
          errors: err.response.data,
          loading: false
        });
      });
  };
=======
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
>>>>>>> 529254bda9e6f2872c8e482bb2016521db5e18ab

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { errors, loading } = this.state;
    return (
      <div>
        <article className="container landing">
          <div className="row">
            <div className="col-sm-8">
              <h4 className="signup-facebook-help">
                <strong>
                  Facebook helps you connect and share with the people in your
                  life.
                </strong>
              </h4>
              <img
                className="img"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/OBaVg52wtTZ.png"
                alt=""
                width="537"
                height="195"
              />
            </div>
            <div className="col-sm-4">
              <h3>
                <strong>Create an account</strong>
              </h3>
              <p>Its quick and easy</p>
              <form onSubmit={this.handleSubmit} autoComplete="off">
                <div className="form-group">
                  <label className="control-label text-dark">
                    Email Address
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      value={this.state.email}
                      onChange={this.handleChange}
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
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label className="control-label text-dark">
                    Confirm Password
                    <input
                      name="confirmPassword"
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={this.state.confirmPassword}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label className="control-label text-dark">
                    User Name
                    <input
                      name="handle"
                      type="text"
                      className="form-control"
                      placeholder="User Name"
                      value={this.state.handle}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <small>
                  By clicking Sign Up, you agree to our Terms and that you have
                  read our Data Use Policy, including our Cookie Use.
                </small>
                <hr />
                <div className="form-group">
                  <label className="control-label"></label>
                  {errors.error && <p>{errors.error}</p>}
                  <button type="submit" className="btn btn-success">
                    Sign up
                    {loading && <CircularProgress />}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Signup;
