import React, { Component } from "react";
import "../App.css";
import Posts from "./Posts";
import ShowPost from "./ShowPost";

export class User extends Component {
  state = {
    text: "",
    click: "no"
  };

  handleClick = (event) => {
    this.setState({ click: "yes" });
    this.setState({ text: this.state.text });
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
    
  };

  render() {
    return (
      <div className="homepage-container">
        <div className="homepage-header">
          <div className="homepage-navbar">
            <h1>facebook</h1>
          </div>
        </div>
        <div className="posts">
          <Posts handleChange={this.handleChange} 
          handleClick={this.handleClick} />

          {this.state.click === "yes" && (<ShowPost text={this.state.text}/>)}
        </div>
      </div>
    );
  }
}

export default User;
