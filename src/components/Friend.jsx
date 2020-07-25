import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
require ('../App.css');


class Friend extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    console.log(this.props.item);
    axios
      .get(`/user/${this.props.item}`, {
        headers: { Authorization: `${localStorage.FBIdToken}` }
      })
      .then(res => {
        this.setState({ user: res.data[0] });
        console.log(this.state.user);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div >
        <div clasName="first6">
          {/* <i class="fas fa-user-friends"></i> */}
          
        </div>
        <div className="grid5">
          <div>
            <a
              className=" _8t lfloat _ohe"
              href=""
              data-hovercard-prefer-more-content-show="1"
            >
              <img
                class="img-profile-tab"
                alt=""
                src={this.state.user.imageUrl}
                width="200px"
                height="200px"
                role="img"
              />
            </a>
            <Link to={`/user/${this.state.user.handle}`}>
            {this.state.user.handle}
            </Link>
            
            <br />
            <p>
            {this.state.user.friends ? (
                <p>{this.state.user.friends.length}friends</p>
              ) : (
                <p>0 friends</p>
              )}
            </p>

          </div>
        </div>
      </div>
      
        // <div class="card mb-3">
        //   <div class="row no-gutters">
        //     <div class="col-md-4">
        //       <img
        //         src={this.state.user.imageUrl}
        //         class="card-img"
        //         alt="ProfileImage"
        //       />
        //     </div>
        //     <div class="col-md-8">
        //       <div class="card-body">
        //         <h5 class="card-title">{this.state.user.handle}</h5>
        //         <p class="card-text">HeyI am new at facebook</p>
        //         <p class="card-text">
        //           <small class="text-muted">
        //             {this.state.user.friends ? (
        //               <p>{this.state.user.friends.length}friends</p>
        //             ) : (
        //               <p>0 friends</p>
        //             )}
        //           </small>
        //         </p>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      
    );
  }
}

export default Friend;
