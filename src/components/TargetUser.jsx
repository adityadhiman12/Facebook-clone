import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../App.css";
// import Navbar from "./Navbar";
import axios from "axios";
import "../App.css";
import Post from "./Post";
import Intro from "./intro/Intro";
import About from "./about/about";
import Friends from "../components/Friends";

class TargetUser extends Component {
  state = {
      user: {},
      postings: []
  }
  componentDidMount() {
    axios.get(`/user/${this.props.match.params.handle}`, {
      headers: { Authorization: `${localStorage.FBIdToken}` }
    }).then(res => this.setState({user: res.data[0]})).catch(err => console.log(err))
    
    axios
      .get("/posts", {
        headers: { Authorization: `${localStorage.FBIdToken}` }
      })
      .then(res => {
                //   console.log(res.data);
        res.data.map(user => {
            // console.log(user.userHandle)
            if(user.userHandle === this.props.match.params.handle){
                this.setState({
                    postings: this.state.postings.concat([user])
                  });
            }
            
        })

        
      })
      .catch(err => console.log(err));

}

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
        </div>
      );
  }
}

export default TargetUser;
