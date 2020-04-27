import React, {Component} from "react";

class MessageBoxs extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};
    this.messages = [];
  }

  handleOnClick(event) {
    if (this.state.name) {
      this.messages.push(this.messageHolder);
      this.props.addMessage(this.messages);
      this.setState({
        name: "",
      });
    }
  }

  handleOnChange(event) {
    this.messageHolder = event.target.value;
    this.setState({
      name: event.target.value,
    });
  }

  styles = {
    border: "5px solid rgb(224, 168, 1)",
    backgroundColor: "rgb(212, 244, 252)",
  };

  render() {
    return (
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 p-0">
          <div className="input-group mb-3">
            <input
              value={this.state.name}
              style={this.styles}
              onChange={(event) => this.handleOnChange(event)}
              type="text"
              className="form-control"
              placeholder="Message..."
            ></input>
            <div className="input-group-append">
              <button
                onClick={() => this.handleOnClick()}
                className="btn btn-warning"
                type="button"
              >
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    );
  }
}

export default MessageBoxs;
