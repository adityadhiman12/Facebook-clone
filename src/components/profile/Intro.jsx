import React, { Component } from "react";
require("./css/intro.css");

export class intro extends Component {
  render() {
    return (
      <div>
        <div className="first-intro">
          <i className="fa fa-globe-americas styleglobe"></i>
          <h5>Introduction</h5>
        </div>
        <div className="textintro">
          Add a short bio to tell people more about yourself.
        </div>
        <div className="line">
          <button
            className="textintro2"
            data-toggle="modal"
            data-target="#bioModal"
          >
            Add Bio
          </button>
        </div>
        <div>
          <ul className="introbullet">
            <li className="margintop">
              <i className="fa fa-suitcase" /> Worked at{" "}
              <button className="textintro1"></button>
              <button
                className="sidegap"
                data-toggle="modal"
                data-target="#myModal"
              >
                <i class="far fa-edit"></i>
              </button>
            </li>
            <li className="margintop">
              <i className="fa fa-suitcase" /> Went to{" "}
              <button className="textintro1"></button>{" "}
            </li>
            <li className="margintop">
              <i className="fa fa-graduation-cap" /> Lives in{" "}
              <button className="textintro1"></button>
            </li>
            <li className="margintop">
              <i className="fa fa-graduation-cap" /> Address{" "}
              <button className="textintro1"></button>
            </li>
            <li className="margintop">
              <i className="fa fa-rss" /> Followed by{" "}
              <button className="textintro1">48 people</button>
            </li>
          </ul>
        </div>
        <div>{/* <SmallImagePanel/> */}</div>

        {/* About smallintro Modal */}

        <div id="myModal" class="modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <form method="post" onSubmit="">
                <div class="modal-header">
                  <h4 class="modal-title">Customize Your Intro </h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>
                <div class="modal-body">
                  <div class="form-group">
                    <label>Worked at :</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Workedat"
                      defaultValue=""
                      placeholder="Enter Worked at"
                      onChange=""
                      name="Workedat"
                    />
                  </div>
                  <div class="form-group">
                    <label>Went to :</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Wentto"
                      placeholder="Enter went to"
                      defaultValue=""
                      onChange=""
                      name="Wentto"
                    />
                  </div>
                  <div class="form-group">
                    <label>Address :</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Address"
                      placeholder="Enter where are you from "
                      defaultValue=""
                      onChange=""
                      name="Address"
                    />
                  </div>
                  <div class="form-group">
                    <label>Lives in :</label>
                    <input
                      type="text"
                      class="form-control"
                      id="Livesin"
                      placeholder="Enter lives in"
                      onChange=""
                      defaultValue=""
                      name="Livesin"
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bio Modal */}
        <div id="bioModal" class="modal fade" role="dialog">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Add Bio </h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group">
                  <label>Bio :</label>
                  <textarea class="form-control" id="bio" name="bio"></textarea>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default intro;
