import React, { Component } from "react";
import axios from 'axios';
class Notifications extends Component {
  state = {
    accept: false,
    user: {}
  };

  componentDidMount() {
    axios
      .get("/user", { headers: { Authorization: `${localStorage.FBIdToken}` } })
      .then(res => {
        this.setState({ user: res.data.credentials });
      })
      .catch(err => console.log(err));
  }

  render() {
    return <p>hello</p>;
  }
}

export default Notifications;
