import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import axios from "axios";
require("../App.css");

const styles = {
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20,
    padding: 30
  },
  image: {
    width: 141,
    height: 146,
    borderRadius: 100
  },
  content: {
    padding: 25,
    objectFit: "cover"
  }
};

class ShowPost extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      user: { imageUrl, handle },
      posts
    } = this.props;
    posts.map(post => {
      return axios.post(
        "/post",
        { body: post.text },
        { headers: { Authorization: `${localStorage.FBIdToken}` } }
      );
    });

    return posts.map(post => (
      <div className="card">
        <div className="card-header">
          <img
            className="round-img"
            src={imageUrl}
            component={Link}
            to={`/profile`}
            className="round-img"
          />
          <div className="fetched-post-content">
            {handle}
            <div className="ageOfPost">{dayjs(post.time).fromNow()}</div>
          </div>
        </div>
        <div class="card-body">{post.text}</div>
        <div className="card-footer">
          <div className="createfooter">
            {/* <div className="like-comment-button"> */}
            <div className="footer">
              <i class="far fa-thumbs-up"></i>
              <button onClick="" className="likebtn1">
                {" "}
                Like
              </button>
              {/* <> total number of likes on post</> */}
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
            value=""
            placeholder="Write a comment..."
            rows="1"
            cols="50"
            onChange=""
          />
          <button className="btn btn-primary btn-xs _btnsize" onClick="">
            Post
          </button>
        </div>
      </div>
    ));
  }
}
export default withStyles(styles)(ShowPost);
