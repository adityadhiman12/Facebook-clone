import React, { Component } from "react";
import "../App.css";
import Posts from "./Posts";
import ShowPost from "./ShowPost";
import app from "../firebase/firebase";
import postDb from "../db/postDb"


export class User extends Component {
  state = {
    text: "",
    click: "no",
    posts: []
  };
  handleClick = event => {
    this.setState({ click: "yes" });
    this.state.posts.push({ text: this.state.text });
    this.setState({ text: "" });
    event.preventDefault();
  };
  handleChange = event => {
    this.setState({ text: event.target.value });
  };
  render() {
    postDb.fetchAllPosts();
    return (
      
      <div className="homepage-container">
        <div className="homepage-header">
          <div className="homepage-navbar">
            <h1>facebook</h1>
          </div>
        </div>
        <div className="posts">
          <Posts
            handleChange={this.handleChange}
            handleClick={this.handleClick}
          />{" "}
          {this.state.click === "yes" && <ShowPost posts={this.state.posts} />}
        </div>
        <button onClick={() => app.auth().signOut()}>Sign out</button>
      </div>
    );
  }
}
export default User;
