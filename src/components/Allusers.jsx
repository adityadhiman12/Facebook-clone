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
      .get("/alluser", {
        headers: {
          Authorization: `${localStorage.FBIdToken}`
        }
      })
      .then(profile => {
        this.setState({ user: profile.data });
        console.log(this.state.user);
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
