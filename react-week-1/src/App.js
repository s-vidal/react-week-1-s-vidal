import React, {Component} from "react";
import "./App.css";
import Alert from "./components/alert.jsx";
import CheckBox from "./components/checkBox.jsx";

class App extends Component {
  state = {isChecked: false};

  render() {
    const {isChecked} = this.state;
    return (
      <div className="container">
        <CheckBox
          onCheck={(value) => {
            this.setState({isChecked: !value});
          }}
        />
        {isChecked && <Alert />}
      </div>
    );
  }
}

export default App;
