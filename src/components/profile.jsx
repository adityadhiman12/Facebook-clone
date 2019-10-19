import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../App.css";
// import Navbar from "./Navbar";
import axios from "axios";
import "../App.css";
import Posts from "./posts/Posts";
import Post from "./Post";
import ShowPost from "./ShowPost";
import Intro from "./intro/Intro";
import About from "./about/about";
import Friends from "../components/Friends";
// import {Link} from "react-router-dom";

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
      })
      .catch(err => console.log(err));
    axios
      .get("/userposts", {
        headers: { Authorization: `${localStorage.FBIdToken}` }
      })
      .then(res => {
        // console.log(res.data);
        this.setState({
          postings: res.data
        });
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
    let recentPostsdata = this.state.postings ? (
      this.state.postings.map(post => <Post key={post.postId} post={post} />)
    ) : (
      <p>loading....</p>
    );
    return (
      <div>
        {/* <Navbar /> */}
        {/* cover starts */}
        <div className="container1">
          <div className="coverpadx">
            {/* cover pic  */}
            <a href="" data-toggle="modal" data-target="#imagemodal">
              <img src={this.state.user.cover} alt="cover-pic" />
            </a>
          </div>
          {/* cover pic end */}
          <div className="imagebutton buttonwrapper">
            <button>
              <i class="fa fa-camera"></i>Update Cover Photo
            </button>
            <input
              type="file"
              defaultValue={this.state.user.cover}
              onChange=""
              name="cover-pic"
            />
          </div>
        </div>
        {/* cover ends */}

        {/* profile pic */}
        <div className="container">
          <div className="profilepicx">
            <img src={this.state.user.imageUrl} alt="profile-pic" />
          </div>
          <div className="imagebutton1 buttonwrapper1">
            <button>
              <i class="fa fa-camera"></i>Update{" "}
            </button>
            <input
              type="file"
              defaultValue={this.state.user.imageUrl}
              onChange=""
              name="profile-pic"
            />
          </div>
        </div>
        {/* profile pic ends */}

        <div className="user-name">{this.state.user.handle}</div>

        <Tabs className="listremove">
          <TabList className="listremove">
            <Tab>
              <div className="box1">Timeline</div>
            </Tab>
            <Tab>
              <div className="box2">About</div>
            </Tab>
            <Tab>
              <div className="box3">Friends</div>
            </Tab>
            <Tab>
              <div className="box4">Photos</div>
            </Tab>
          </TabList>
          <TabPanel>
            <div className="container7">
              <div className="Introduction">
                <Intro />
              </div>
              <div className="Post">
                <Posts
                  handleChange={this.handleChange}
                  handleClick={this.handleClick}
                />{" "}
                {this.state.click === "yes" && (
                  <ShowPost posts={this.state.posts} user={this.state.user} />
                )}
                <div className="newsFeedPosts">{recentPostsdata}</div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <About />{" "}
          </TabPanel>
          <TabPanel>
            <Friends friends={this.state.user.friends} />{" "}
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
        {/* cover pic modal */}
        <div id="imageModal" className="modal fade " role="dialog">
          <div className="modal-dialog ">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <img src={this.state.user.cover} alt="cover pic" />
              </div>
            </div>
          </div>
        </div>
        {/* cover pic modal ends */}
        <button onClick={this.logoutUser}>Sign out</button>
      </div>
    );
  }
}

export default profile;
