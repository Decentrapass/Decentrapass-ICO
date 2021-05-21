import React, { Component } from "react";

const currentPrice = 10000;

const startTime = new Date("2021-06-01, 00:00:00");
const endTime = new Date("2021-05-22, 12:00:00");

export default class FixedStats extends Component {
  render() {
    return (
      <ul className="text-xl">
        <li className="my-1">
          Start time:{" "}
          <span className="text-gray-700 font-mono ml-2">
            {startTime.toLocaleString()}
          </span>
        </li>
        <li className="my-1">
          End time:{" "}
          <span className="text-gray-700 font-mono ml-2">
            {endTime.toLocaleString()}
          </span>
        </li>
        <li className="my-1">
          Total coins sold:{" "}
          <span className="text-gray-700 font-mono ml-2">1,000,000 SAFE</span>
        </li>
        <li className="my-1">
          Starting price:{" "}
          <span className="text-gray-700 font-mono ml-2">10,000 SAFE/ETH</span>
        </li>
        <li className="my-1">
          Ending price:{" "}
          <span className="text-gray-700 font-mono ml-2">7,500 SAFE/ETH</span>
        </li>
      </ul>
    );
  }
}
