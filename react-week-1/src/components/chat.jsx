import React, {Component} from "react";

class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  styles = {
    border: "1px solid rgb(224, 168, 1)",
    borderRadius: "20px",
    backgroundColor: "rgb(224, 168, 1)",
    margin: "3px",
    padding: "10px",
    display: "inline-block",
    maxWidth: "115%",
    height: "auto",
    overflow: "auto",
    whiteSpace: "no-wrap",
    float: "right",
    wordWrap: "break-word",
  };

  render() {
    return (
      <div className="row">
        <div className="col-2"></div>
        <div className="col-10">
          <div style={this.styles}>
            <span className="m-0">{this.props.children}</span>
          </div>
        </div>
      </div>
    );
  }
}

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  styles = {
    border: "5px solid rgb(224, 168, 1)",
    borderRadius: "5px",
    backgroundColor: "rgb(212, 244, 252)",
    minHeight: "80vh",
    maxHeight: "80vh",
    overflowX: "hidden",
    overFlowY: "scroll",
    justifyContent: "right",
  };

  list = {listStyleType: "none", paddingLeft: "5px"};

  render() {
    return (
      <div className="row mt-4">
        <div className="col-2"></div>
        <div style={this.styles} className="col-8 p-0">
          <ul style={this.list}>
            {this.props.messages &&
              this.props.messages.map((item, index) => (
                <li key={index}>
                  <MessageBox>{item}</MessageBox>
                </li>
              ))}
          </ul>
        </div>
        <div className="col-2"></div>
      </div>
    );
  }
}

export default Chat;
