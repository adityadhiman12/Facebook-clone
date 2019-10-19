import React, { Component } from "react";
import Friend from "./Friend";

class Friends extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.friends.map(friend => (
          <div>
            <Friend item={friend} />
          </div>
        ))}
      </div>
    );
  }
}

export default Friends;
