import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
require("../App.css");

const styles = {
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20,
    padding: 30
  },
  image: {
    padding: 70,
    borderRadius: 100
  },
  content: {
    padding: 25,
    objectFit: "cover"
  }
};

class Post extends Component {
  state = {};
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      post: { body, createdAt, userImage, userHandle }
    } = this.props;
    return (
      // one way of showing post
      <div>
        <div className="mainpage-container">
          {/* <div className="flex-item4"> */}
          <div className="container-6">
            <div className="card">
              <div className="card-header">
                <img
                  className="round-img"
                  src={userImage}
                  component={Link}
                  to={`/profile`}
                  className="round-img"
                />
                <div
                  className="fetched-post-content">
                    {userHandle}
                  
                  <div className="ageOfPost">{dayjs(createdAt).fromNow()}</div>
                </div>
              </div>
              <div class="card-body">{body}</div>

              <div className="card-footer">
                <div className="createfooter">
                  {/* <div className="like-comment-button"> */}
                  <div className="footer">
                    <i class="far fa-thumbs-up"></i>
                    <button className="likebtn1"> Like</button>
                    {/* <> insert total number of likes on post</> */}
                  </div>
                  <div className="footer">
                    <i class="far fa-comment-alt"> Comment</i>
                  </div>
                  {/* </div> */}
                </div>
              </div>
              <div className="cmnts">
                {/* <img className="nav-user-image" src={userImage} alt="" /> */}
                <textarea
                  className="comments"
                  name="comments"
                  placeholder="Write a comment..."
                  rows="1"
                  cols="50"
                />
                <button className="btn btn-primary btn-xs _btnsize">
                  Post
                </button>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Post);
