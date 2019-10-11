import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import SignUp from "./components/signup";
import { AuthProvider } from "./firebase/auth";
import PrivateRoute from "./privateRoute";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login}  />
          <Route exact path="/login" component={SignUp} />          
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;