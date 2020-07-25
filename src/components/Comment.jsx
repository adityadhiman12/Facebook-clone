import React, { Component } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Axios from "axios";

class Comment extends Component {
  state = {};
  componentDidMount() {
      console.log(this.props)
    Axios.post(
      `/post/${this.props.postId}`,
      { "body": this.props.comment.text },
      {
        headers: { Authorization: `${localStorage.FBIdToken}` }
      }
    )
  }

  render() {
    dayjs.extend(relativeTime);
    return (
      <div>
        {/* <div className="flex-item4"> */}
        <div className="container-6">
          <div className="card">
            <div className="card-header">
              <img
                className="round-img"
                alt="profile"
                src={this.props.userImage}
              />
              <div className="fetched-post-content">
                <p>{this.props.userHandle}</p>

                <div className="ageOfPost">
                  {dayjs(this.props.comment.createdAt).fromNow()}
                </div>
              </div>
            </div>
            <div class="card-body">{this.props.comment.text}</div>
            <div className="cmnts">
              {/* <img className="nav-user-image" src={userImage} alt="" /> */}
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Comment;
