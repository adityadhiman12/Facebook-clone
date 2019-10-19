import React, { Component } from "react";
import axios from "axios";
import Addusers from "./Adduser";

class Allusers extends Component {
  state = {
    user: []
  };
  componentDidMount() {
    axios
      .get("/alluser")
      .then(profile => {
        this.setState({ user: profile.data });
        // console.log(this.state.user);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      // <div>
      //   {this.state.user.map(user => (
      //     <p>{user.handle}</p>
      //   ))}
      // </div>

            <div>
                {this.state.user.map(user => (
          <div>
            <Addusers item={user} />
          </div>
        ))}
      </div>
    );
  }
}

export default Allusers;
