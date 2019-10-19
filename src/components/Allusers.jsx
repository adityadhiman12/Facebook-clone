import React, { Component } from "react";
import axios from "axios";
import Addusers from "./Adduser";
require("../App.css");

class Allusers extends Component {
  state = {
    user: []
  };
  componentDidMount() {
    axios
      .get("/alluser")
      .then(profile => {
        this.setState({ user: profile.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container-users">
        <div className="all-users">
          {this.state.user.map(user => (
            <div>
              <Addusers item={user} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Allusers;
