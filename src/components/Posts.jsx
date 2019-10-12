import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export class Posts extends Component {
  render() {
    return (
      <div>
        <input
          onChange={this.props.handleChange}
          type="text"
          placeholder="Write something here..."
          value={this.props.text}
        />

        <Button
          onClick={this.props.handleClick}
          variant="outlined"
          color="primary"
        >
          Post
        </Button>
      </div>
    );
  }
}

export default Posts;
