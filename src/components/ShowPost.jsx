import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export class ShowPost extends Component {
  render() {
    return (
      <div>
          <Card>
        <CardContent>
          <Typography variant="body2" component="p">
            {this.props.text}
            <br />
        
          </Typography>
        </CardContent>
        {/* <p>{this.props.text}</p> */}
        </Card>
      </div>
    );
  }
}

export default ShowPost;
