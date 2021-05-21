import React, { Component } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GoCheck } from "react-icons/go";

import Web3 from "web3";
import Web3Modal from "web3modal";
import AccountDisplay from "./AccountDisplay";
import Swapping from "./Swapping";

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
        <div className="w-1/2 flex flex-col items-center justify-center mt-20">
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
          <button
            onClick={this.connectWallet}
            className="bg-green-500 font-black text-white py-4 px-7 text-xl my-6 transform hover:scale-105 transition-transform focus:outline-none flex items-center justify-center"
          >
            <span>1) connect your wallet</span>
            {this.state.web3 && <GoCheck className="ml-3" />}
          </button>
          <p className="font-black text-xl mb-3 mt-4">
            2) Calculate the ammount of SAFE you want
          </p>
          <div className="flex items-center justify-center">
            <Swapping price={10000} />
          </div>
        </div>
      </>
    );
  }
}
