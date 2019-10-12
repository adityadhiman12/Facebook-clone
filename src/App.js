import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import userhome from "./components/User";
import { AuthProvider } from "./firebase/auth";
import PrivateRoute from "./privateRoute";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (

    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/login" component={Login}  />
          <Route exact path="/login" component={SignUp} /> 
          <PrivateRoute exact path="/user"
          component={userhome}/>
                   
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;