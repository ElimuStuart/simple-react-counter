import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  incrementClick = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  decrementClick = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };

  toggleClickCount = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleClickCount}>
          {this.state.show ? "Hide" : "Show"}
        </button>{" "}
        &nbsp;
        <button onClick={this.incrementClick}>Click to increment</button>
        {this.state.show ? <h1>{this.state.clicks}</h1> : null}
        <button onClick={this.decrementClick}>Click to decrement</button>
      </div>
    );
  }
}
