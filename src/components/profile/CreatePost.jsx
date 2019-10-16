import React, { Component } from "react";
import Posts from "../posts/Posts";
import ShowPost from "../ShowPost";

export class CreatePost extends Component {
  state = {
    text: "",
    click: "no",
    posts: []
  };
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
    return (
      <div>
        <Posts
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />{" "}
        {this.state.click === "yes" && <ShowPost posts={this.state.posts} />}
      </div>
    );
  }
}

export default CreatePost;
