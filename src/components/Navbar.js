import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export class Navbar extends Component {
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
              />
              <i className="fas fa-search srch-icon"></i>
            </div>
          </div>
          <div className="navright">
            <div>
              {/* <img
                src=
                alt="Image of woman"
                className="nav-user-image"
              /> */}
            </div>
            <div className="color">
              <Link to="/profile">
                {" "}
                <p className="navtxt">
                  User Profile
                  {/* user name*/}
                </p>{" "}
              </Link>
              <p className="navtxt">|</p>

              <div className="dropdown">
                <i
                  // onClick=
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
              <Link to="notification">
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

            <div className="right-navbar-icon">
              {" "}
              <i className="fas fa-caret-down fa-lg"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
