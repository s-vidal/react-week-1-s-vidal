import React, {Component} from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.message = "";
  }

  keyPress = (e) => {
    if (e.keyCode === 13) {
      this.props.onSend(this.message);
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="input-group">
          <input
            onChange={(input) => (this.message = input.target.value)}
            onKeyDown={this.keyPress}
            type="text"
            className="form-control"
            placeholder="new to-do..."
          ></input>
          <div className="input-group-append">
            <button
              onClick={() => this.props.onSend(this.message)}
              className="btn btn-primary"
              id="basic-addon2"
            >
              send
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Input;
