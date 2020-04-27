import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faPencilAlt,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";

class Branch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  style = {
    backgroundColor: this.props.color,
    borderRadius: "180%",
    width: "150px",
    height: "150px",
  };
  fontAwesomeStyle = {
    marginLeft: "45%",
    marginTop: "45%",
  };
  render() {
    return (
      <div className="d-flex flex-column branch align-items-center mt-2">
        <div style={this.style}>
          <FontAwesomeIcon
            style={this.fontAwesomeStyle}
            icon={this.props.fontAwesome}
          />
        </div>
        <div>
          <p className="text-center pt-4">{this.props.h3}</p>
        </div>
        <div>
          <p className="font-s-p pl-2 pr-2 text-center">{this.props.p}</p>
        </div>
      </div>
    );
  }
}

class Body extends Component {
  state = {};
  body = {
    backgroundColor: "Salmon",
    color: "white",
    minHeight: "89.5vh",
  };
  render() {
    return (
      <div
        style={this.body}
        className="d-flex flex-column align-items-center pt-3"
      >
        <div>
          <h1 className="pb-1 pt-2">Services</h1>
        </div>
        <div className="d-flex justify-content-center font-s-p">
          <p className="w-50 text-center pb-5 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quam
            ut pariatur consequuntur praesentium minima numquam assumenda
            dolorem officiis debitis est facilis iusto delectus velit iusto
            delectus velit facilis iusto delectus?
          </p>
        </div>
        <div className="row mr-0 justify-content-center">
          <Branch
            className="col-4"
            color="rgb(56, 52, 53)"
            fontAwesome={faEnvelopeOpenText}
            h3="User InterFace Design"
            p="officiis debitis est facilis iusto delectus velit suscipit harum?"
          />
          <Branch
            className="col-4"
            fontAwesome={faPencilAlt}
            color="rgb(235, 101, 101)"
            h3="Concept and Ideas"
            p="officiis debitis est facilis iusto delectus velit suscipit harum?"
          />
          <Branch
            className="col-4"
            fontAwesome={faDesktop}
            color="rgb(83, 173, 91)"
            h3="Desgin and Branding"
            p="officiis debitis est facilis iusto delectus velit suscipit harum?"
          />
        </div>
      </div>
    );
  }
}

export default Body;
