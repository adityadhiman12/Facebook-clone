import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import HomePage from "./components/HomePage";
import Home from "./components/Home";
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
  );
};

export default App;
