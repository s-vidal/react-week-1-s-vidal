import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row custom-navbar">
          <div className="custom-navbar-item col-2">
            <a href="www.itc.co.il">
              <p className="custom-text">Services</p>
            </a>
          </div>
          <div className="custom-navbar-item col-2">
            <a href="www.itc.co.il">
              <p className="custom-text">Work</p>
            </a>
          </div>
          <div className="custom-navbar-item col-2">
            <a href="www.itc.co.il">
              <p className="custom-text underline">Team</p>
            </a>
          </div>
          <div className="custom-navbar-item col-2"></div>
          <div className="custom-navbar-item flex-basis col-2">
            <FontAwesomeIcon icon={faMobileAlt} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
