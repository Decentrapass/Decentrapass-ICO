import React, { Component } from "react";
import { IoSwapHorizontalSharp } from "react-icons/io5";

export default class Swapping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ethFirst: true,
      value: 0,
      init: 1,
    };

    this.handleType = this.handleType.bind(this);
  }

  componentDidMount() {
    this.setState({ value: this.state.init * this.props.price });
  }

  handleType(e) {
    let val = parseFloat(e.target.value);
    if (this.state.ethFirst) {
      this.setState({ value: val * this.props.price, init: val });
    } else {
      this.setState({ value: val / this.props.price, init: val });
    }
  }

  render() {
    return (
      <>
        <div className="py-4 border border-gray-300 bg-gray-200 border-r-0 w-16 flex items-center justify-center">
          {this.state.ethFirst ? "ETH" : "SAFE"}
        </div>
        <input
          className="py-4 px-7 border border-gray-300 bg-white"
          type="number"
          onChange={this.handleType}
          value={this.state.init}
        />
        <IoSwapHorizontalSharp
          className="mx-5 text-3xl cursor-pointer hover:text-green-500 transition-colors delay-75"
          onClick={() => this.setState({ ethFirst: !this.state.ethFirst })}
        />
        <input
          className="py-4 px-7 border border-gray-300 bg-white"
          type="number"
          disabled={true}
          value={this.state.value}
        />
        <div className="py-4 border border-gray-300 bg-gray-200 border-l-0 w-16 flex items-center justify-center">
          {this.state.ethFirst ? "SAFE" : "ETH"}
        </div>
      </>
    );
  }
}
