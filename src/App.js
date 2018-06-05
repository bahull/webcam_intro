import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      video: ""
    };
    this.cameraRef = React.createRef();
  }
  componentDidMount() {
    console.log(
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(video => console.log(video))
    );
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(video => (this.cameraRef = video));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <video ref={this.cameraRef} autoPlay />
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
