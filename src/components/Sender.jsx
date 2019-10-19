import React, { Component } from "react";
import axios from "axios";

class Sender extends Component {
  state = {
    sender: {}
  };

  componentDidMount() {
    console.log(this.props.item);
    axios
      .get(`/user/${this.props.item}`, {
        headers: {
          Authorization: `${localStorage.FBIdToken}`
        }
      })
      .then(res => {
        this.setState({ sender: res.data[0] });
        console.log(this.state.sender);
      })
      .catch(err => console.log(err));
  }

  acceptFriendRequest = () => {
    axios
      .post(`/user/${this.props.item}/accept`,{}, {
        headers: {
          Authorization: `${localStorage.FBIdToken}`
        }
      })
      .then(() => {
        console.log("accepted friend request");
      })
      .catch(err => console.log(err));
  };

  rejectFriendRequest = () => {
    axios
      .post(`/user/${this.props.item}/reject`,{}, {
        headers: {
          Authorization: `${localStorage.FBIdToken}`
        }
      })
      .then(() => {
        console.log("rejected friend request");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src={this.state.sender.imageUrl}
              class="card-img"
              alt="ProfileImage"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{this.state.sender.handle}</h5>
              <p class="card-text">Hey I am new at facebook</p>
              <p class="card-text">
                <small class="text-muted">
                  {this.state.sender.friends ? (
                    <p>{this.state.sender.friends.length}friends</p>
                  ) : (
                    <p>0 friends</p>
                  )}
                </small>
              </p>
              <button onClick={this.acceptFriendRequest}>Accept</button>
              <button onClick={this.rejectFriendRequest}>Reject</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sender;
