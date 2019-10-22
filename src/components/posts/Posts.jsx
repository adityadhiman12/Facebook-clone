import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./css/posts.css";
<<<<<<< HEAD
import axios from "axios";

export class Posts extends Component {
  state = {
    image: null,
    url: ""
  };


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
          <ul>
            <div className="fk">
              <div className="space buttonwrapper3">
                {/* <button className="add-img">
                  <i
                    className="fas fa-photo-video fa-lg"
                    style={{ color: "blue" }}
                  ></i>{" "}
                  Photo{" "}
                </button> */}
                <button
                  className="fas fa-photo-video fa-lg"
                  style={{ color: "blue" }}
                >
                  <input
                    name="img"
                    type="file"

                    onChange={this.handleChangeImage}
                  />
                </button>
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
          </ul>
=======
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';

export class Posts extends Component {
  render() {
    return (
      <div>
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
                        className="fas fa-photo-video fa-lg"
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
          </div>
>>>>>>> 529254bda9e6f2872c8e482bb2016521db5e18ab
        </div>
      </div>
    );
  }
}

export default Posts;
