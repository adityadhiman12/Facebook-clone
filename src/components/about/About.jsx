import React, { Component } from "react";
import DetailAbout from "./DetailAbout";
require("./css/about.css");
export class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="coverpadx2">
            <i className="far fa-images fontstyle1"></i>
            <h3 className="namephoto"> About</h3>
            <DetailAbout />
          </div>
        </div>
        {/* <div className="setimagediv">
                {/* <Image/>` */}
        {/* </div> */} */}
      </div>
    );
  }
}

export default About;
