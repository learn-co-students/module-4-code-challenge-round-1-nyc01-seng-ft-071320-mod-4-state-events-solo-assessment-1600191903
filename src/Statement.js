import React from "react";
import { yes, no } from "./objects.js";

class Statement extends React.Component {
  constructor() {
    super();
    this.state = {
      yesOrNo: "yes",
    };
  }

  handleClick = () => {
    if (this.state.yesOrNo === "yes") {
      this.setState({
        yesOrNo: "no",
      });
    } else if (this.state.yesOrNo === "no") {
      this.setState({
        yesOrNo: "yes",
      });
    }
  };

  render() {
    if (this.state.yesOrNo === "yes") {
      return (
        <div>
          <div>{yes["yes-statement"]}</div>
          <div onClick={this.handleClick}>
            <img src={yes["yes-image"]} />
          </div>
        </div>
      );
    } else if (this.state.yesOrNo === "no") {
      return (
        <div>
          <div>{no["no-statement"]}</div>
          <div onClick={this.handleClick}>
            <img src={no["no-image"]} />
          </div>
        </div>
      );
    }
    // return <div onClick={this.handleClick}>{this.state.yesOrNo}</div>;
  }
}

export default Statement;
