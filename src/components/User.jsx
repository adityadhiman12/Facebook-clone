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
    postings: null
  };
  componentDidMount(){
    axios.get('/posts', { headers: {"Authorization" : `${localStorage.FBIdToken}`} })
    .then(res => {
      // console.log(res)
      console.log(res.data)
      this.setState({
        postings: res.data
      });
      console.log(this.state.postings)
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
     this.state.posts.push({ text: this.state.text });
    }
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
      this.state.postings.map(post => <Post key={post.postId}post={post}/>)) : (<p>loading....</p>)

    
    return (
      <div className="homepage-container">
        <Navbar />

        <div className="posts">
          <Posts
            handleChange={this.handleChange}
            handleClick={this.handleClick}
          />{" "}
          {this.state.click === "yes" && <ShowPost posts={this.state.posts} />}
        </div>
        <div className={classes.newsFeedPosts}>{recentPostsdata}</div>
        <button onClick={this.logoutUser}>Sign out</button>
      </div>
    );
  }
}
export default withStyles(styles)(User);
