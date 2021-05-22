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
    this.changeType = this.changeType.bind(this);
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

  changeType() {
    let value = this.state.value;
    let init = this.state.init;

    console.log(value, init);

    this.setState({
      value: init,
      init: value,
      ethFirst: !this.state.ethFirst,
    });
  }

  render() {
    return (
      <div className="w-full flex items-center justify-center">
        <div className="py-4 border border-gray-300 bg-gray-200 border-r-0 w-1/12 flex items-center justify-center rounded-l">
          {this.state.ethFirst ? "ETH" : "SAFE"}
        </div>
        <input
          className="py-4 px-7 border border-gray-300 bg-white focus:outline-none focus:border-green-700 w-1/3 rounded-r"
          type="number"
          max={10}
          min={0}
          step={0.5}
          onChange={this.handleType}
          value={this.state.init}
        />
        <IoSwapHorizontalSharp
          className="text-3xl cursor-pointer hover:text-green-500 transition-colors delay-75 w-1/6"
          onClick={this.changeType}
        />
        <input
          className="py-4 px-7 border border-gray-300 bg-white cursor-not-allowed w-1/3 rounded-l"
          type="number"
          disabled={true}
          value={this.state.value}
        />
        <div className="py-4 border border-gray-300 bg-gray-200 border-l-0 w-1/12 flex items-center justify-center rounded-r">
          {this.state.ethFirst ? "SAFE" : "ETH"}
        </div>
      </div>
    );
  }
}
