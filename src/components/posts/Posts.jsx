import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./css/posts.css";

export class Posts extends Component {
  render() {
    return (
      <div>
        <input
          onChange={this.props.handleChange}
          className="postClass"
          type="text"
          placeholder="Write something here..."
          value={this.props.text}
          required
        />

        <div className="card-footer">
          {/* <div className="createfooter1"> */}
          <ul className="post-footer">
            <li className="li">
              <div className="fk">
                <div className="space buttonwrapper1">
                  <button className="add-img">
                    <i
                      class="fas fa-photo-video fa-lg"
                      style={{ color: "blue" }}
                    ></i>{" "}
                    Photo{" "}
                  </button>
                  <input
                    name="img"
                    type="file"
                    defaultValue=""
                    // onChange
                  />
                </div>

                <Button
                  variant="contained"
                  onClick={this.props.handleClick}
                  color="primary"
                  className="postButton"
                >
                  Post
                </Button>
              </div>
            </li>
          </ul>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Posts;
