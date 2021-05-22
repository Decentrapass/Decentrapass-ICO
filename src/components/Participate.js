import React, { Component } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GoCheck } from "react-icons/go";

import Web3 from "web3";
import Web3Modal from "web3modal";
import AccountDisplay from "./AccountDisplay";
import Swapping from "./Swapping";
import Buy from "./Buy";

export default class Participate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: null,
    };

    this.connectWallet = this.connectWallet.bind(this);
  }

  async connectWallet() {
    const providerOptions = {};

    const web3Modal = new Web3Modal({
      network: "mainnet",
      providerOptions,
    });

    const provider = await web3Modal.connect();

    const web3 = new Web3(provider);
    this.setState({ web3 });
  }

  render() {
    return (
      <>
        {this.state.web3 && <AccountDisplay web3={this.state.web3} />}
        <div className="w-1/2 xl:w-1/3 flex flex-col items-center justify-center mt-20 text-center">
          <h1 className="font-black text-5xl mb-4">Participate</h1>
          <div className="text-center">
            <span>connect your ethereum wallet</span>
            <IoIosArrowForward className="inline" />
            <span>
              calculate the ammount of <span className="font-mono">SAFE</span>{" "}
              you wish to buy
            </span>
            <IoIosArrowForward className="inline" />
            <span>
              accept the transaction and wait for the ICO to finish to receive
              your tokens directly in your wallet
            </span>
          </div>
          <p className="font-black text-xl mb-3 mt-10">
            1) connect your favorite Ethereum wallet
          </p>
          <button
            onClick={this.connectWallet}
            className="bg-green-500 font-black text-white py-4 px-16 rounded text-xl mb-6 transform hover:bg-green-600 hover:scale-95 transition-transform transition-colors focus:outline-none flex items-center justify-center w-full"
          >
            <span>connect</span>
            {this.state.web3 && <GoCheck className="ml-3" />}
          </button>
          <p className="font-black text-xl mb-3 mt-10">
            2) Calculate the ammount of SAFE you want (current price:{" "}
            {10000 + " "}
            SAFE/ETH)
          </p>
          <div className="flex items-center justify-center w-full">
            <Swapping price={10000} />
          </div>
          <p className="font-black text-xl mb-3 mt-10">3) Buy SAFE</p>
          <Buy web3={this.state.web3} />
        </div>
      </>
    );
  }
}
