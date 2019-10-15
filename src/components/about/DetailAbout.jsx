import React, { Component } from "react";

export class DetailAbout extends Component {

  componentDidMount(){
    document.querySelector("#defaultOpen").click();
  }

  openTab=(event,tabName)=>{
    let i,tabContent,tabLink;
    tabContent=document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    tabLink = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabLink.length; i++) {
      tabLink[i].className = tabLink[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";

  }

  render() {
    return (
      <div>
        <div>
          <div class="tab">
            <button class="tablinks"
            onClick={event=>this.openTab(event, 'overview')}
            id="defaultOpen">
              Overview
            </button>
            <button class="tablinks" onClick={event=>this.openTab(event, 'WorkandEducation')}>Work and Education</button>
            <button class="tablinks"
            onClick={event=>this.openTab(event, 'PlacesYouhaveVisited')}>Places You've Visited</button>
            <button class="tablinks"
            onClick={event=>this.openTab(event, 'ContactandBasicDetails')}
            >Contact and Basic Details</button>
            <button class="tablinks"
            onClick={event=>this.openTab(event, 'FamilyandRelationships')}
            >Family and Relationships</button>
            <button class="tablinks"
            onClick={event=>this.openTab(event, 'DetailsAboutYou')}
            >Details About You</button>
            <button class="tablinks"
            onClick={event=>this.openTab(event, 'LifeEvents')}
            >Life Events</button>
          </div>

          <div id="overview" class="tabcontent overview">
            <p className="nameline2">BASIC INFORMATION</p>
            <div className="basicinfo">
              <p>Birth Date</p>
              <h5>July 29</h5>
              <p>Birth Year</p>
              <h5>1998</h5>
              <p>Gender</p>
              <h5>male</h5>
              <p>Interested in</p>
              <h5>Women</h5>
              <p>Language</p>
              <h5>Hindi English Language</h5>
              <p>Religion</p>
              <h5>Indian</h5>
            </div>
          </div>

          <div id="WorkandEducation" class="tabcontent WorkandEducation">
            <p className="nameline2">Work</p>
            <div className="aline1">
              <a href=" ">+ Add a workplace</a>
            </div>
            <p className="nameline2">PROFESSIONAL SKILLS</p>
            <div className="aline1">
              <a href=" ">+ Add a professional skills</a>
            </div>
            <p className="nameline2">COLLEGE</p>
            <div className="aline1">
              <a href=" ">+ Add a college</a>
            </div>

            <p className="nameline2">HIGH SCHOOL</p>
            <div className="aline1">
              <a href=" ">+ Add a high school</a>
            </div>
          </div>

          <div
            id="PlacesYouhaveVisited"
            class="tabcontent PlacesYouhaveVisited"
          >
            <p className="nameline2">CURRENT CITY AND HOMETOWN</p>

            <p className="nameline2">OTHER PLACES LIVED</p>
            <div className="aline1">
              <a href=" ">+ Add a Place</a>
            </div>
          </div>

          <div
            id="ContactandBasicDetails"
            class="tabcontent ContactandBasicDetails"
          >
            <p className="nameline3">CONTACT INFORMATION </p>
            <div className="basicinfo4">
              <p>Mobile Phones</p>
              <h5>7015461459</h5>
              <p>Email</p>
              <h5>aditya.dhiman@mountblue.io</h5>
            </div>
            <div className="aline1">
              <a href=" ">+ Add other phones</a>
            </div>
            <div className="aline1">
              <a href=" ">+ Add your address</a>
            </div>
            <div className="aline1">
              <a href=" ">+ Add a public key</a>
            </div>
            <p className="nameline2">WEBSITES AND SOCIAL LINKS</p>
            <div className="aline1">
              <a href=" ">+ Add a website</a>
            </div>
            <div className="aline1">
              <a href=" ">+ Add a social link</a>
            </div>
          </div>

          <div
            id="FamilyandRelationships"
            class="tabcontent FamilyandRelationships"
          >
            <p className="nameline2">RELATIONSHIP </p>
            <p>Single</p>
            <p className="nameline2">FAMILY MEMBERS </p>
            <div className="aline1">
              <a href=" ">+ Add a Family member</a>
            </div>
          </div>

          <div id="DetailsAboutYou" class="tabcontent DetailsAboutYou">
            <p className="nameline2">ABOUT YOU</p>
            <p>
                Just a common person,working hard silently.
            </p>
            <p className="nameline2">OTHER NAMES</p>
            <div className="aline1">
              <a href=" ">+ Add a nickname , a birth name</a>
            </div>
            <p className="nameline2">FAVORITE QUOTES</p>
            <p>
                Keep your dream alive,even if you are going with a slow place,just keep it alive.
            </p>
          </div>

          <div id="LifeEvents" class="tabcontent LifeEvents">
            <p className="nameline2">LIFE EVENTS</p>
            <div className="aline1">
              <a href=" ">+ Add a life event</a>
            </div>
            <p>2016 Started College at Chitkara University,Punjab</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailAbout;
