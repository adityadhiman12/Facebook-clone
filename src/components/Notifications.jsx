import React, { Component } from "react";
import axios from "axios";
import Sender from "./Sender"
class Notifications extends Component {
  state = {
    users: []
  };

   componentDidMount() {
     axios
      .get("/user", { headers: { Authorization: `${localStorage.FBIdToken}` } })
      .then(res => {
          console.log(res.data.credentials.requests)
          this.setState({ users: this.state.users.concat(res.data.credentials.requests) });
          console.log(this.state.users);
      })
      .catch(err => console.log(err));
  }
  
  

  render() {

    
    return (
        <div>
            {this.state.users.map(sender => (
                <Sender item={sender}/>
            ))}
            
      </div>
    )
  }
}

export default Notifications;
