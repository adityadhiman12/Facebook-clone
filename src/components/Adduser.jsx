import React, { Component } from "react";
import axios from "axios";
import "../App.css"

class Adduser extends Component {
  state = {
    sender: [],
    receiver: [],
    initial: "Add Friend",
    cancel: "cancel",
    disabled: false
  };
  componentDidMount() {
    // console.log(this.props.item.handle);
  }

  sendFriendRequest = () => {
    this.setState({initial: "Added",  disabled: true})
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
    this.setState({initial: "Add Friend",  disabled: false})
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
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={this.props.item.imageUrl}
              className="card-img addFriend-image"
              alt="ProfileImage"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{this.props.item.handle}</h5>
              <p className="card-text">Hey I am new at facebook</p>
              <p className="card-text">
                <small className="text-muted">
                  {this.props.item.friends ? (
                    <p>{this.props.item.friends.length}friends</p>
                  ) : (
                    <p>0 friends</p>
                  )}
                </small>
              </p>
              <button type="button" className="btn btn-primary btn-sm" onClick={this.sendFriendRequest} disabled={this.state.disabled}>{this.state.initial}</button>
              <button type="button" className="btn btn-primary btn-sm cancel-request" onClick={this.cancelFriendRequest} disabled={!this.state.disabled}>{this.state.cancel}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Adduser;
