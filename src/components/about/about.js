import React, { Component } from "react";
import Detailabout from "./detailabout";

// import Image from '../images/image'
require("./about.css");
class about extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="coverpadx2">
            <i className="far fa-images fontstyle1"></i>
            <h3 className="namephoto"> About</h3>
            <Detailabout />
          </div>
        </div>
      </div>
    );
  }
}
export default about;
