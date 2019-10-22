import React, { Component } from "react";
import Friend from "./Friend";
require("../App.css");

class Friends extends Component {
  state = {};
  componentDidMount(){
    console.log(this.props.friends)
  }
  render() {
    return (
      <div className="coverpadx10">
        <div className="friends-tab-head">
          <i class="fas fa-user-friends"></i>
          <h4>Friends</h4>
        </div>

        {this.props.friends.map(friend => (
          // <div>
          <Friend item={friend} />
          // </div>
        ))}
      </div>
    );
  }
}

export default Friends;
