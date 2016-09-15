import React from "react";
import ReactDOM from "react-dom";

class Since extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "1000",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <p>We are {this.state.title} days old.</p>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Since/>, app);
