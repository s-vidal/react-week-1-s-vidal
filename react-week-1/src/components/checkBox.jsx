import React, {Component} from "react";

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedMessage: false,
      isChecked: false,
    };
  }

  handleChecked() {
    if (!this.state.isChecked) {
      this.setState({
        checkedMessage: (
          <div className="alert alert-danger" role="alert">
            Checkbox is checked
          </div>
        ),
        isChecked: true,
      });
    } else {
      this.setState({checkedMessage: false, isChecked: false});
    }
    this.props.onCheck(this.state.isChecked);
  }

  render() {
    return (
      <div className="row">
        <div className="col-1"></div>
        <div className="col-4">
          <p>Check Box to display content</p>
        </div>
        <div className="col-2">
          <input
            type="checkbox"
            onChange={(event) => this.handleChecked(event)}
            className="form-check-input"
            id="exampleCheck1"
          ></input>
        </div>
        <div className="col-4">{this.state.checkedMessage}</div>
      </div>
    );
  }
}

export default CheckBox;
