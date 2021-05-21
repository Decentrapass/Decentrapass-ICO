import React, { Component } from "react";

export default class AccountDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: null,
    };
  }

  async componentDidMount() {
    let web3 = this.props.web3;
    this.setState({ account: (await web3.eth.getAccounts())[0] });
  }

  render() {
    return (
      <div className="fixed top-5 right-5 rounded-xl py-2 px-5 bg-gray-900 text-white flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
        {this.state.account}
      </div>
    );
  }
}
