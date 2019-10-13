import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
export class ShowPost extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <Card>
            <CardContent>
              <Typography variant="body2" component="p">
                <p>{post.text}</p>
              </Typography>
            </CardContent>
          </Card>
        ))}{" "}
        <br />
      </div>
    );
  }
}
export default ShowPost;
