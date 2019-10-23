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
  state = {
    commentText: "",
    click: "no",
    comments: []
  };

  commentPost = event => {
    console.log(event)
    if (this.state.commentText.length !== 0) {
      this.setState({ click: "yes" });
      this.state.comments.unshift({
        text: this.state.text,
        time: new Date().toISOString()
      });
    }
    console.log(this.state.comments);
    this.setState({ commentText: "" });
    event.preventDefault();
  }

  handleChangeComment = event => {
    console.log(event)
    console.log(event.target.value);
    this.setState({ commentText: event.target.value });
  };


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
      )
    });

    return posts.map(post => (
      <div className="card">
        <div className="card-header">
          <img
            className="round-img"
            src={imageUrl}
            component={Link}
            to={`/profile`}
            alt="profile"
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
                Likes
              </button>
              {/* <> total number of likes on post</> */}
            </div>
            <div className="footer">Comments</div>
            {/* </div> */}
          </div>
        </div>
        <div className="cmnts">
          {/* <img className="nav-user-image" src={userImage} alt="" /> */}
          <textarea
            className="comments"
            name="comments"
            value={this.state.commentText}
            placeholder="Write a comment..."
            rows="1"
            cols="50"
            onChange={this.handleChangeComment}
          />
          <button className="btn btn-primary btn-xs _btnsize" onClick={this.commentPost}>
            Post
          </button>
        </div>
      </div>
    ));
  }
}
export default withStyles(styles)(ShowPost);
