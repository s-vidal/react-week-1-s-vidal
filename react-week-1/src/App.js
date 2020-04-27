import React, {Component} from "react";
import "./App.css";
import Chat from "./components/chat";
import MessageBox from "./components/messageBox";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div style={this.border} className="container mt-2">
        <Chat messages={this.state.messages} />
        <MessageBox addMessage={(messages) => this.setState({messages})} />
      </div>
    );
  }
}

export default App;
