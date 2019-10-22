import React, { Component } from "react";
import "../App.css";
import Posts from "./posts/Posts";
import ShowPost from "./ShowPost";
import Navbar from "./Navbar";
import app from "../firebase/firebase";
import axios from "axios";
import Post from "./Post";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import coverphoto from "../components/profile/img/Joker-Trailer-1-61.jpg";

const styles = {
  newsFeedPosts: {
    width: "60vw",
    margin: "auto"
  }
};

export class User extends Component {
  state = {
    text: "",
    click: "no",
    posts: [],
    postings: null
  };
  componentDidMount() {
    axios
      .get("/posts")
      .then(res => {
        // console.log(res)
        // console.log(res.data)
        this.setState({
          postings: res.data
        });
      })
      .catch(err => console.log(err));
  }

  handleClick = event => {
    if (this.state.text.length !== 0) {
      this.setState({ click: "yes" });
      this.state.posts.push({ text: this.state.text });
    }
    this.setState({ text: "" });
    event.preventDefault();
  };
  handleChange = event => {
    this.setState({ text: event.target.value });
  };
  render() {
    const { classes } = this.props;
    // console.log(this.state.posts)
    let recentPostsdata = this.state.postings ? (
      this.state.postings.map(post => <Post key={post.postId} post={post} />)
    ) : (
      <p>loading....</p>
    );

    return (
      <div className="homepage-container">
        <Navbar />
        <div className="container-main">
          <div className="flex-item1 left">
            <ul className="left-panel">
              <li className="profile1">
                <Link to="/profile">
                  <img
                    src={coverphoto}
                    className="left-user-image"
                    alt="profile-pic"
                  />{" "}
                  Aditya Dhiman
                </Link>
              </li>

              <li>
                <Link to="/">
                  <i className="far fa-newspaper" style={{ color: "blue" }}>
                    {" "}
                  </i>
                  <>News Feed</>
                </Link>
              </li>
            </ul>
          </div>

          <div className="posts">
            <Posts
              handleChange={this.handleChange}
              handleClick={this.handleClick}
            />{" "}
            {this.state.click === "yes" && (
              <ShowPost posts={this.state.posts} />
            )}
          </div>
          <div className={classes.newsFeedPosts}>{recentPostsdata}</div>
          <button onClick={() => app.auth().signOut()}>Sign out</button>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(User);
