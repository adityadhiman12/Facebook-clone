import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { borderRadius } from "@material-ui/system";

const styles = {
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20,
    padding:30
  },
  image: {
    padding: 70,
    borderRadius: 100
  },
  content: {
    padding: 25,
    objectFit: "cover"
  }
};

class Post extends Component {
  state = {};
  render() {
    const {
      classes,
      post: {
        body,
        createdAt,
        userImage,
        userHandle,
        screamId,
        likeCount,
        commentCount
      }
    } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia
          image={userImage}
          title="Profile image"
          className={classes.image}
          component={Link}
          to={`/profile`}
        />
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`profile`}
            color="primary"
          >
            {userHandle}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {createdAt}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Post);
