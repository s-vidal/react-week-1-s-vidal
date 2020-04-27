import React from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Body from "./components/body";

function App() {
  return (
    <div className="d-flex flex-column">
      <NavBar />
      <Body />
    </div>
  );
}

export default App;
