import React, { Component } from "react";
import "../App.css";
import Navbar from "./Navbar";
import axios from "axios";
import "../App.css";
import Posts from "./posts/Posts";
import Post from "./Post";
import ShowPost from "./ShowPost";
import Friends from "../components/Friends"

class profile extends Component {
  state = {
    user: {},
    postings: null,
    text: "",
    click: "no",
    posts: []
  };
  componentDidMount() {
    axios
      .get("/user", { headers: { Authorization: `${localStorage.FBIdToken}` } })
      .then(res => {
        this.setState({ user: res.data.credentials });
        console.log(this.state.user.friends);
      })
      .catch(err => console.log(err));
    axios
      .get("/userposts", {
        headers: { Authorization: `${localStorage.FBIdToken}` }
      })
      .then(res => {
        // console.log(res)
        console.log(res.data);
        this.setState({
          postings: res.data
        });
        // console.log(this.state.postings)
      })
      .catch(err => console.log(err));
  }
  handleClick = event => {
    if (this.state.text.length !== 0) {
      this.setState({ click: "yes" });
      this.state.posts.unshift({
        text: this.state.text,
        time: new Date().toISOString()
      });
    }
    console.log(this.state.posts);
    this.setState({ text: "" });
    event.preventDefault();
  };
  handleChange = event => {
    this.setState({ text: event.target.value });
  };
  logoutUser = () => {
    localStorage.removeItem("FBIdToken");
    delete axios.defaults.headers.common["Authorization"];
    window.location.replace("/login");
  };

  render() {
    console.log(this.state.postings);
    let recentPostsdata = this.state.postings ? (
      this.state.postings.map(post => <Post key={post.postId} post={post} />)
    ) : (
      <p>loading....</p>
    );
    return (
      <div>
        <Navbar />

        <section className="profile">
          <div className="profile-header">
            <div className="profile-cover">
              <img src={this.state.user.cover} alt="ProfilePicture" />
              <div className="profile-thumbnail">
                <img
                  src={this.state.user.imageUrl}
                  alt="ProfilePicture"
                  className="profile-picture"
                />
              </div>
            </div>

            <div className="profile-name">{this.state.user.handle}</div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light profile-navbar">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav profile-nav">
                  <li class="nav-item active">
                   
                      Timeline <span class="sr-only">(current)</span>
                    
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" >
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" >
                      Friends
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      More
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="profile-body">
            <div className="user-bio">
              <Friends friends={this.state.user.friends}/>
            </div>
            <div className="posts">
              <Posts
                handleChange={this.handleChange}
                handleClick={this.handleClick}
              />{" "}
              {this.state.click === "yes" && (
                <ShowPost posts={this.state.posts} user={this.state.user} />
              )}
            </div>
            <div className="newsFeedPosts">{recentPostsdata}</div>
          </div>
          <button onClick={this.logoutUser}>Sign out</button>
        </section>
      </div>
    );
  }
}

export default profile;
