import React, { Component } from "react";
import "../App.css";
import Posts from "../components/posts/Posts";
import ShowPost from "./ShowPost";
import Navbar from "./Navbar";
import axios from "axios"
import Post from "./Post"
import { withStyles } from "@material-ui/styles";


const styles = {
  newsFeedPosts: {
    width: "60vw",
    margin: "auto"


  }
}

export class User extends Component {
  state = {
    text: "",
    click: "no",
    posts: [],
    postings: null,
    user: {}
  };
  // postOnePost = (req, res) => {
  //   const newPost = {
  //     body: req.body.body,
  //     userHandle: req.user.handle,
  //     createdAt: new Date().toISOString(),
  //     userImage: req.user.imageUrl,
  //     likeCount: 0,
  //     commentCount: 0
  //   };
  
  //   db.collection("posts")
  //     .add(newPost)
  //     .then(data => {
  //       const resPost = newPost;
  //       resPost.postId = data.id;
  //       res.json({ resPost });
  //     })
  //     .catch(err => console.error(err));
  // };
  
  componentDidMount(){
    axios.get('/posts', { headers: {"Authorization" : `${localStorage.FBIdToken}`} })
    .then(res => {
      // console.log(res)
      // console.log(res.data)
      this.setState({
        postings: res.data
      });
      // console.log(this.state.postings)
    }).catch(err => console.log(err))
    axios.get('/user', { headers: {"Authorization" : `${localStorage.FBIdToken}`} })
    .then(res => {
      // console.log(res)
      
      this.setState({user: res.data.credentials})
      // console.log(this.state.user)
    }).catch(err => console.log(err))
  }
 
  logoutUser = () => {
  localStorage.removeItem('FBIdToken');
  delete axios.defaults.headers.common['Authorization'];
  window.location.replace("/login")

}



  handleClick = event => {
    if (this.state.text.length !== 0) {
      this.setState({ click: "yes" });
     this.state.posts.unshift({ text: this.state.text, time: new Date().toISOString() });
    }
    console.log(this.state.posts)
    this.setState({ text: "" });
    event.preventDefault();
  };
  handleChange = event => {
    this.setState({ text: event.target.value });
  };
  render() {
    const {classes} = this.props;
    // console.log(this.state.posts)
    let recentPostsdata = this.state.postings ? (
      this.state.postings.map(post => <Post key={post.postId}post={post} />)) : (<p>loading....</p>)

    
    return (
      <div className="homepage-container">
        <Navbar />

        <div className="posts">
          <Posts
            handleChange={this.handleChange}
            handleClick={this.handleClick}
          />{" "}
          {this.state.click === "yes" && <ShowPost posts={this.state.posts} user={this.state.user} />}
        </div>
        <div className={classes.newsFeedPosts}>{recentPostsdata}</div>
        <button onClick={this.logoutUser}>Sign out</button>
      </div>
    );
  }
}
export default withStyles(styles)(User);
