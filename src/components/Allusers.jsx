import React, { Component } from "react";
import axios from "axios";
import Addusers from "./Adduser";

class Allusers extends Component {
  state = {
    user: null
  };
  componentDidUpdate() {
    axios
      .get("/alluser")
      .then(profile => {
        console.log(profile);
        this.setState({ user: profile.data });
        console.log(this.state.user);
      })
      .catch(err => console.log(err));
  }
  componentDidMount() {
    axios
      .get("/alluser")
      .then(profile => {
        console.log(profile);
        this.setState({ user: profile.data });
        console.log(this.state.user);
      })
      .catch(err => console.log(err));
  }

  render() {
    
    
    return (
      <p>hello</p>
        //       <div>
        //           {this.state.user.map(user => (
        //     <div>
        //       <Addusers item={user} />
        //     </div>
        //   ))}
        // </div>
    );
  }
}

export default Allusers;
