import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import userhome from "./components/User";
import Home from "./components/Home";
import Profile from "./components/profile/profile";
import "bootstrap/dist/css/bootstrap.css";
import jwtDecode from "jwt-decode";
import AuthRoute from "./utils/AuthRoute";
import PrivateRoute from "./utils/auth"
import { Redirect} from 'react-router-dom';


const logoutUser = () => {
  localStorage.removeItem('FBIdToken');
  // delete axios.defaults.headers.common['Authorization'];
  window.location.replace("/login")

}
const loginUser = () => {
  window.location.replace("/")

}




let authenticated;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
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
          <PrivateRoute exact path="/user" component={userhome} authenticated={authenticated}/>
          <Route exact path="/profile" component={Profile} />
        </div>
      </Router>
  );
};

export default App;
