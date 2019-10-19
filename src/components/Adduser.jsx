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
          Authorization:
            "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZhMWQ3NzBlZWY5ZWFhNjU0MzY1ZGE5MDhjNDIzY2NkNzY4ODkxMDUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmFjZWJvb2stY2xvbmUtZDFkZTEiLCJhdWQiOiJmYWNlYm9vay1jbG9uZS1kMWRlMSIsImF1dGhfdGltZSI6MTU3MTQ2MjM4MCwidXNlcl9pZCI6IkhvM25HQ0xHWTZNMmhaTWJJeDZQTVNCZU9rMzIiLCJzdWIiOiJIbzNuR0NMR1k2TTJoWk1iSXg2UE1TQmVPazMyIiwiaWF0IjoxNTcxNDYyMzgwLCJleHAiOjE1NzE0NjU5ODAsImVtYWlsIjoic2Fua2V0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJzYW5rZXRAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.GKnazAd101yK88FAXbAhWIJnEBlg0NzyJk2MyX34_Bm1Y7ouEMa_AlzTyDMUjqTcZ_RIWtdd9cKUSrBHGg8CgT9XAYhh3qJ8H8uiMAfOgB2Yk_6dwkMfVte_M3LhHBf3Q_pamBMWpH0vVAG990Bndd9AkSfxVrK0I95sMh2sDgBNjhkzKYPxGW1kJ70YaPABRrF-b1cIsXllT4QEonGl7zC5273AN6gk56f8ZMFJr-7UCBxawnM9dTE74gw_CLkvVXyQA9DeehgS3YjRlEVSGDkZdz4WEUlJ7Sypp5wPgPu__yCRbRdG8v_JyEZyTYkSv2C20S6quKMqv4Oma_YKtw"
        }
      })
      .then(() => console.log("request sent"))
      .catch(err => console.log(err));
  };
  cancelFriendRequest = () => {
    axios
    .post(`/user/${this.props.item.handle}/cancelRequest`,{}, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZhMWQ3NzBlZWY5ZWFhNjU0MzY1ZGE5MDhjNDIzY2NkNzY4ODkxMDUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZmFjZWJvb2stY2xvbmUtZDFkZTEiLCJhdWQiOiJmYWNlYm9vay1jbG9uZS1kMWRlMSIsImF1dGhfdGltZSI6MTU3MTQ2MjM4MCwidXNlcl9pZCI6IkhvM25HQ0xHWTZNMmhaTWJJeDZQTVNCZU9rMzIiLCJzdWIiOiJIbzNuR0NMR1k2TTJoWk1iSXg2UE1TQmVPazMyIiwiaWF0IjoxNTcxNDYyMzgwLCJleHAiOjE1NzE0NjU5ODAsImVtYWlsIjoic2Fua2V0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJzYW5rZXRAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.GKnazAd101yK88FAXbAhWIJnEBlg0NzyJk2MyX34_Bm1Y7ouEMa_AlzTyDMUjqTcZ_RIWtdd9cKUSrBHGg8CgT9XAYhh3qJ8H8uiMAfOgB2Yk_6dwkMfVte_M3LhHBf3Q_pamBMWpH0vVAG990Bndd9AkSfxVrK0I95sMh2sDgBNjhkzKYPxGW1kJ70YaPABRrF-b1cIsXllT4QEonGl7zC5273AN6gk56f8ZMFJr-7UCBxawnM9dTE74gw_CLkvVXyQA9DeehgS3YjRlEVSGDkZdz4WEUlJ7Sypp5wPgPu__yCRbRdG8v_JyEZyTYkSv2C20S6quKMqv4Oma_YKtw"
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
