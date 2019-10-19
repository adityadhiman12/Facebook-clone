import React, { Component } from "react";
import axios from "axios";

class Adduser extends Component {
  state = {
    sender: [],
    receiver: []
  };
  componentDidMount() {
    // console.log(this.props.item.handle);
  }

  sendFriendRequest = () => {
    axios
      .post(`/user/${this.props.item.handle}/request`,{}, {
        headers: {
            Authorization: `${localStorage.FBIdToken}`
        }
      })
      .then(() => console.log("request sent"))
      .catch(err => console.log(err));
  };
  cancelFriendRequest = () => {
    axios
    .post(`/user/${this.props.item.handle}/cancelRequest`,{}, {
      headers: {
        Authorization: `${localStorage.FBIdToken}`
      }
    })
    .then(() => console.log("request sent"))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src={this.props.item.imageUrl}
              class="card-img"
              alt="ProfileImage"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{this.props.item.handle}</h5>
              <p class="card-text">Hey I am new at facebook</p>
              <p class="card-text">
                <small class="text-muted">
                  {this.props.item.friends ? (
                    <p>{this.props.item.friends.length}friends</p>
                  ) : (
                    <p>0 friends</p>
                  )}
                </small>
              </p>
              <button onClick={this.sendFriendRequest}>Add friend</button>
              <button onClick={this.cancelFriendRequest}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Adduser;
