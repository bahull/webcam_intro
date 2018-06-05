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
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(video => (this.cameraRef.current.srcObject = video));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>Testing a new video feed</h2>
        <video id="video" ref={this.cameraRef} autoPlay />
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
