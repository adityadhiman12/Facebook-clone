import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'


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
    dayjs.extend(relativeTime)
    const {
      classes,
      post: {
        body,
        createdAt,
        userImage,
        userHandle
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
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Post);
