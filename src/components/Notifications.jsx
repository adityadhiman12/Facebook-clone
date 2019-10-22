import React, { Component } from "react";
import axios from "axios";
import Sender from "./Sender";
import NavBar from "./Navbar";
require("../App.css");
class Notifications extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get("/user", { headers: { Authorization: `${localStorage.FBIdToken}` } })
      .then(res => {
        console.log(res.data.credentials.requests);
        this.setState({
          users: this.state.users.concat(res.data.credentials.requests)
        });
        console.log(this.state.users);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container-users">
          <div className="all-users">
            {this.state.users.map(sender => (
              <div>
                <Sender item={sender} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Notifications;
