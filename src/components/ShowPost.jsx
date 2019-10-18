import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime';
import axios from "axios"

const styles = {
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20,
    padding:30
  },
  image: {
    width: 141,
    height: 146,
    borderRadius: 100
  },
  content: {
    padding: 25,
    objectFit: "cover"
  }
};

 class ShowPost extends Component {
  render() {
    dayjs.extend(relativeTime)
    const {
      classes,
      user: {
        imageUrl,
        handle
      },
      posts
    } = this.props;
    posts.map(post => {
       return axios.post('/post', {body: post.text}, { headers: {"Authorization" : `${localStorage.FBIdToken}`} })
      
    })
    
    return (
     posts.map(post => (
      
      <Card className={classes.card}>
      <CardMedia
        src={imageUrl}
        title="Profile image"
        className={classes.image}
        component="img"
      />
      <CardContent className={classes.content}>
        <Typography
          variant="h5"
          component={Link}
          to={`profile`}
          color="primary"
        >
          {handle}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {dayjs(post.time).fromNow()}
        </Typography>
        <Typography variant="body1">{post.text}</Typography>
      </CardContent>
    </Card>
     ))
    );
  }
}
export default withStyles(styles)(ShowPost);
