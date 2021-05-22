import React, { Component } from "react";
import { IoSwapHorizontalOutline } from "react-icons/io5";

export default class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "1000 SAFE",
      isSafe: true,
    };

    this.handleType = this.handleType.bind(this);
    this.changeType = this.changeType.bind(this);
    this.buyCoins = this.buyCoins.bind(this);
  }

  handleType(e) {
    let val = e.target.value.replace(/[^0-9.]/g, "");
    if (this.state.isSafe) e.target.value = val + " SAFE";
    else e.target.value = val + " ETH";
  }

  changeType() {
    let newVal =
      this.state.val.split(" ")[0].replace(/[^0-9.]/g, "") +
      (this.state.isSafe ? " ETH" : " SAFE");

    this.setState({
      isSafe: !this.state.isSafe,
      val: newVal,
    });
  }

  async buyCoins() {
    let currentPrice = 10000;
    let val = parseFloat(this.state.val.split(" ")[0]);

    if (!this.state.isSafe) val *= currentPrice;

    const web3 = this.props.web3;
    const contract = new web3.eth.Contract();

    contract.methods
      .buyCoins(val)
      .send({ from: (await web3.eth.getAccounts())[0] });
  }

  render() {
    return (
      <div className="flex items-center justify-center w-full h-16">
        <input
          type="text"
          onFocus={(e) => (e.target.value = e.target.value.split(" ")[0])}
          onBlur={this.handleType}
          value={this.state.val}
          onChange={(e) => this.setState({ val: e.target.value })}
          className="h-full px-7 border border-gray-300 bg-white w-full focus:outline-none focus:border-green-700 text-xl rounded-l text-gray-800"
        />
        <button
          className="h-full px-4 border-t border-b border-gray-300 bg-gray-200 font-black text-xl hover:bg-gray-300 focus:outline-none"
          onClick={this.changeType}
        >
          <IoSwapHorizontalOutline />
        </button>
        <button
          className="h-full px-7 bg-green-500 text-white font-black text-xl hover:bg-green-600 rounded-r focus:outline-none"
          onClick={this.buyCoins}
        >
          buy
        </button>
      </div>
    );
  }
}
