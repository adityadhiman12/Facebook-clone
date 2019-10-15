import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Introduction from "./Intro";
import CreatePost from "./CreatePost"
import "./css/profilepage.css";
import coverphoto from "./img/Joker-Trailer-1-61.jpg";
import profilepic from "./img/joker-2019-14-cover.jpg";
import Navbar from "../Navbar";
import About from "../about/About";


export class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="coverFirst">
          <div className="coverSecond">
            <div className="coverpad"></div>
            <div className="container1">
              <div className="coverpadx">
                <a href=" " data-toggle="modal" data-target="imageModal">
                  <img src={coverphoto} alt="cover-pic" />
                </a>
              </div>

              <div class="imagebutton buttonwrapper">
                <button>
                  <i class="fa fa-camera"></i>Update Cover Photo
                </button>
                <input
                  type="file"
                  defaultValue=""
                  onChange=""
                  name="cover-pic"
                />
              </div>
            </div>
            <div className="profilepic"></div>
            <div className="container">
              <div className="profilepicx">
                <img src={profilepic} alt="profile-pic" />
                <div class="imagebutton1 buttonwrapper1">
                  <button>
                    <i class="fa fa-camera"></i>Update{" "}
                  </button>
                  <input
                    className="profile-pic-input"
                    type="file"
                    defaultValue=""
                    onChange=""
                    name="profile-pic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="username"></div>

        <Tabs className="lisremove">
          <div className="option-first">
            {/* <div className="option-two"> */}
              <TabList className="listremove" >
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
                {/* <Tab>
                  <select className="select1">
                    <option selected className="option1">
                      More
                    </option>
                    <option value="Videos" className="option1">
                      Videos
                    </option>
                    <option value="Place" className="option1">
                      Places
                    </option>
                    <option value="Pages" className="option1">
                      Pages
                    </option>
                  </select>
                </Tab> */}
              </TabList>
                <div className="container7">
                  <div className="Introduction"><Introduction/> </div>
                  <div className="CreatePost"><CreatePost/></div>
                </div>
            {/* </div> */}
          </div>
                

                {/* Cover Pic Modal */}
          <div id="imageModal" className="modal fade " role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <img src="" alt="cover pic" />
                </div>
              </div>
            </div>
          </div>
          <TabPanel></TabPanel>
          
          <TabPanel><About/></TabPanel>
          <TabPanel>{/* <FriendsProfile/> */}</TabPanel>
          <TabPanel>
            <div className="shiftphotos">{/* <ShowImages/> */}</div>
          </TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Profile;
