import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import userhome from "./components/User";
import Home from "./components/Home";
import Profile from "./components/profile";
import "bootstrap/dist/css/bootstrap.css";
import jwtDecode from "jwt-decode";
import AuthRoute from "./utils/AuthRoute";
import PrivateRoute from "./utils/auth";
import Allusers from "./components/Allusers"
import Navbar from "./components/Navbar"
import Notifications from "./components/Notifications";

const logoutUser = () => {
  localStorage.removeItem("FBIdToken");
  window.location.replace("/login");
};

let authenticated;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  // console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    logoutUser();
    authenticated = false;
  } else {
    authenticated = true;
  }
}

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <AuthRoute
          exact
          path="/login"
          component={Login}
          authenticated={authenticated}
        />
        <AuthRoute
          exact
          path="/login"
          component={SignUp}
          authenticated={authenticated}
        />
        <PrivateRoute
          exact
          path="/user"
          component={Navbar}
          authenticated={authenticated}
        />
        <PrivateRoute
          exact
          path="/profile"
          component={Navbar}
          authenticated={authenticated}
        />
        <PrivateRoute
          exact
          path="/addFriends"
          component={Navbar}
          authenticated={authenticated}
        />
        <PrivateRoute
          exact
          path="/user"
          component={userhome}
          authenticated={authenticated}
        />
        <PrivateRoute
          exact
          path="/profile"
          component={Profile}
          authenticated={authenticated}
        />
        <PrivateRoute
          exact
          path="/addfriends"
          component={Allusers}
          authenticated={authenticated}
        />
        <PrivateRoute
          exact
          path="/notifications"
          component={Notifications}
          authenticated={authenticated}
        />
      </div>
    </Router>
  );
};

export default App;
