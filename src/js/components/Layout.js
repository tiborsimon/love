import React from "react";

export default class Layout extends React.Component {

  constructor() {
    super();
    this.state = {
      target: 10,
      counter: 0,
      current: 0
    };
  }

  changeCount(e) {
    const temp = this.state;
    temp.target = e.target.value;
    this.setState({
      temp
    })
  }

  startTimer(count) {
    console.log("start!");
  }

  componentWillUnmount() {
    clearInterval(this.state.counter);
  }

  timer() {
    this.setState({current: this.state.current-1})
  }

  render() {
    return (
      <div>
        <h1>Ultimate Timer v1.0</h1>
        <input type="number" step="1" min="0" value={this.state.target} onChange={this.changeCount.bind(this)} />
        <input type="Submit" value="Start" onClick={this.startTimer.bind(this)} ></input>
      </div>
    )
  }
}
