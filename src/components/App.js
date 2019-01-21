import React, { Component } from "react";
import "./App.style.scss";
import some from "./some.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="title">hello world</h1>
        <img src={some} />
      </div>
    );
  }
}
export default App;
