import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class Navbar extends Component {
  state = {
    search: "",
    user: {}
  };
  componentDidMount() {
    // console.log(this.props)
  }
  handleClick = event => {
    console.log("executing");
    if (this.state.search.length !== 0) {
      axios
        .get(`/user/${this.state.search}`, {
          headers: { Authorization: `${localStorage.FBIdToken}` }
        })
        .then(res => {
          this.setState({ user: res.data[0] });
          console.log(this.state.user.handle);
          this.props.history.replace(`/user/${this.state.user.handle}`);
          window.location.reload();

        })
        .catch(err => {
          console.log(err);
          alert("no user exists on such name");
        });
    }
    this.setState({ text: "" });
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  logoutUser = () => {
    localStorage.removeItem("FBIdToken");
    delete axios.defaults.headers.common["Authorization"];
    window.location.replace("/login");
  };

  render() {
    return (
      <div className="navbar" sticky="top">
        <div className="container">
          <div className="navleft">
            <Link to="/">
              <div>
                <i className="fab fa-facebook-square fa-2x fb-icon"></i>
              </div>
            </Link>
            <div className="inputText">
              <input
                id="search"
                className="searchl"
                type="text"
                placeholder="search"
                onChange={this.handleChange}
              />
              {/* <button onClick={this.handleClick}> */}
              {/* search */}
              <i
                className="fas fa-search srch-icon"
                onClick={this.handleClick}
                href=""
              ></i>
              {/* </button> */}
            </div>
          </div>
          <div className="navright">
<<<<<<< HEAD
            <div>
              {/* <img
                src=
                alt="Image of woman"
                className="nav-user-image"
              /> */}
            </div>
=======
>>>>>>> 529254bda9e6f2872c8e482bb2016521db5e18ab
            <div className="color">
              <Link to="/profile">
                {" "}
                <p className="navtxt">
                  User Profile
<<<<<<< HEAD
                  {/* user name*/}
=======
                  {/* or else name of user */}
>>>>>>> 529254bda9e6f2872c8e482bb2016521db5e18ab
                </p>{" "}
              </Link>
              <p className="navtxt">|</p>

              <div className="dropdown">
                <i
<<<<<<< HEAD
                  // onClick=
=======
                  // onClick=" "
>>>>>>> 529254bda9e6f2872c8e482bb2016521db5e18ab
                  className="fas fa-user-friends fa-lg"
                ></i>
                <div id="myDropdown" className="dropdown-content"></div>
              </div>
              <Link to="/">
                {" "}
                <p className="navtxt">Home </p>{" "}
              </Link>
              <p className="navtxt">|</p>
            </div>

            <div className="right-navbar-icon">
              <Link to="notifications">
                {" "}
                <i className="fas fa-bell fa-lg"></i>
              </Link>{" "}
            </div>

            <div className="right-navbar-icon">
              <Link to="addFriends">
                {" "}
                <i className="fas fa-user-friends fa-lg"></i>
              </Link>{" "}
            </div>
<<<<<<< HEAD

=======
>>>>>>> 529254bda9e6f2872c8e482bb2016521db5e18ab
            <div className="right-navbar-icon">
              {" "}
              <div class="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle drop-down-logout"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                >
                </button>
                <div className="dropdown-menu">
                  <button onClick={this.logoutUser}>Sign out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
