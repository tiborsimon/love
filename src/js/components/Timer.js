import React from "react";

import Input from "./Timer/Input";
import Title from "./Timer/Title";

export default class Timer extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     target: 10,
  //     reference: 0,
  //     current: 0
  //   };
  // }

  // changeCount(e) {
  //   const temp = this.state;
  //   temp.target = e.target.value;
  //   this.setState({
  //     temp
  //   })
  // }

  // startTimer(count) {
  //   console.log("start!");
  // }

  // componentWillUnmount() {
  //   clearInterval(this.state.counter);
  // }

  // timer() {
  //   this.setState({current: this.state.current-1})
  // }

  render() {
    return (
      <div>
        <Title />
        <Input />
      </div>
    )
  }
}
