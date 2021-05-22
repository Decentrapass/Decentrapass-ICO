import React, { Component } from "react";

const endTime = new Date("2021-05-22, 12:00:00");

const diffDates = (date1, date2) => {
  var diffTime = (date2.getTime() - date1.getTime()) / 1000;

  let hours = Math.floor(diffTime / 3600);
  let minutes = Math.floor((diffTime % 3600) / 60);
  let seconds = Math.floor((diffTime % 3600) % 60);

  return [hours, minutes, seconds];
};

export default class LiveStats extends Component {
  state = {
    timeLeft: [],
  };

  componentDidMount() {
    setInterval(
      function () {
        this.setState({ timeLeft: diffDates(new Date(), endTime) });
      }.bind(this),
      1000
    );
  }

  render() {
    let timeLeft = this.state.timeLeft;
    if (timeLeft[0] <= 24 && timeLeft[0] >= 0) {
      timeLeft =
        timeLeft[0] + ":" + timeLeft[1] + ":" + timeLeft[2] + " until end";
    } else if (timeLeft[0] < 0) {
      timeLeft = "ICO has ended";
    } else {
      timeLeft = "ICO hasn't started yet";
    }

    let currentPrice = 10000;

    return (
      <ul className="text-xl">
        <li className="my-1">
          Time left:{" "}
          <span className="text-gray-700 font-mono ml-2">{timeLeft}</span>
        </li>
        <li className="my-1">
          Number of participants:{" "}
          <span className="text-gray-700 font-mono ml-2">0</span>
        </li>
        <li className="my-1">
          Total eth raised:{" "}
          <span className="text-gray-700 font-mono ml-2">0 ETH</span>
        </li>
        <li className="my-1">
          Current price:{" "}
          <span className="text-gray-700 font-mono ml-2">
            {currentPrice} SAFE/ETH
          </span>
        </li>
        <li className="my-1">
          Individual cap:{" "}
          <span className="text-gray-700 font-mono ml-2">
            10 ETH ({currentPrice * 10} SAFE)
          </span>
        </li>
      </ul>
    );
  }
}
