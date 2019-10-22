import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import HomePage from "./components/HomePage";
import Home from "./components/Home";
<<<<<<< HEAD
import Profile from "./components/profile";
import "bootstrap/dist/css/bootstrap.css";
import jwtDecode from "jwt-decode";
import AuthRoute from "./utils/AuthRoute";
import PrivateRoute from "./utils/auth";
import Allusers from "./components/Allusers"
import Navbar from "./components/Navbar"
import Notifications from "./components/Notifications";
import TargetUser from "./components/TargetUser";

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
          path="/user/:handle"
          component = {Navbar}
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
          component={Navbar}
          authenticated={authenticated}
        />
        <PrivateRoute
          exact
          path="/notifications"
          component={Notifications}
          authenticated={authenticated}
        />
        <PrivateRoute
          exact
          path="/user/:handle"
          component = {TargetUser}
          authenticated={authenticated}
        />        
      </div>
    </Router>
=======
import Profile from "./components/profile/profile";
import { AuthProvider } from "./firebase/auth";
import PrivateRoute from "./privateRoute";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/login" component={SignUp} />
          <PrivateRoute exact path="/homepage" component={HomePage} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </div>
      </Router>
    </AuthProvider>
>>>>>>> 529254bda9e6f2872c8e482bb2016521db5e18ab
  );
};

export default App;
