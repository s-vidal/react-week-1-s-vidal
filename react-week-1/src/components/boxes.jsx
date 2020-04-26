import React, {Component} from "react";

class Box4 extends Component {
  state = {};
  box4 = {backgroundColor: "purple", width: "75%", height: "75%", margin: "5%"};
  render() {
    return <div style={this.box4} className="align-self-center"></div>;
  }
}

class Box3 extends Component {
  state = {};
  box3 = {backgroundColor: "orange", width: "90%", height: "90%"};
  render() {
    return (
      <div style={this.box3} className="d-flex flex-column align-self-center">
        <Box4 />
        <Box4 />
      </div>
    );
  }
}

class Box2 extends Component {
  state = {};
  box2 = {backgroundColor: "blue", width: "95%", height: "95%"};
  render() {
    return (
      <div
        style={this.box2}
        className="d-flex align-self-center justify-content-center"
      >
        <Box3 />
      </div>
    );
  }
}

class Box1 extends Component {
  state = {};
  box1 = {backgroundColor: "green", width: "100vw", height: "100vh"};
  render() {
    return (
      <div
        style={this.box1}
        className="container d-flex justify-content-center"
      >
        <Box2 />
      </div>
    );
  }
}

export default Box1;
