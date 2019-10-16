import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import userhome from "./components/User";
import Home from "./components/Home";
import Profile from "./components/profile/profile";
import 'bootstrap/dist/css/bootstrap.css';
import jwtDecode from "jwt-decode"
import AuthRoute from "./utils/AuthRoute";

let authenticated;
const token = localStorage.FBIdToken;
if(token){
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if(decodedToken.exp*1000 < Date.now()){
    window.location.href = '/login'
    authenticated = false;
  }
  else{
    authenticated = true;
  }
}

const App = () => {
  return (

      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} authenticated = {authenticated}  />
          <AuthRoute exact path="/login" component={SignUp} authenticated = {authenticated} /> 
          <Route exact path="/user"
          component={userhome}/>
          <Route exact path="/profile"
          component={Profile}/>
                   
        </div>
      </Router>
  );
};

export default App;