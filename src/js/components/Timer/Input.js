import React from "react";

export default class Input extends React.Component {
  render() {
    return (
      <div>
        <input type="number" step="1" min="0" value={this.props.target} onChange={this.props.changeCount} />
        <input type="Submit" value="Start" onClick={this.props.startCallback} ></input>
      </div>
    );
  }
}
