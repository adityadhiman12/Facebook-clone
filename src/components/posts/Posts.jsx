import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./css/posts.css";
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';



export class Posts extends Component {
  render() {
    // console.log(this.props)
    
    // const {classes, post: {userImage, userHandle, body, createdAt}} = this.props;
    


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
      </div>
      </div>
    );
  }
}

export default Posts;
