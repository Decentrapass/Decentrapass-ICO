import "./index.css";
import { Component } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import LiveStats from "./components/LiveStats";
import FixedStats from "./components/FixedStats";
import Participate from "./components/Participate";

class App extends Component {
  render() {
    let current = 1;
    let total = 5;
    let percentage = (100 * current) / total;

    return (
      <div className="font-sans flex flex-col justify-center items-center bg-green-50 py-10">
        <h1 className="font-black text-5xl flex flex-col text-center">
          <a href="https://decentrapass.org" className="text-6xl">
            <span className="text-green-500">DECENTRA</span>PASS
          </a>{" "}
          <div>
            Initial Coin Offering
            <span className="text-green-500">.</span>
          </div>
        </h1>
        <p className="w-1/2 text-center text-xl my-4">
          Decentrapass is a protocol for decentralized sensitive data storage.
          The protocol consists of a series of contracts deployed in the
          Ethereum blockchain that achieve a safe and fast way to store and
          access your information.
        </p>
        <div className="flex flex-col items-center justify-center w-3/4 mt-20">
          <h1 className="font-black text-5xl mb-5">Information</h1>
          <div className="flex w-full justify-evenly items-center">
            <div className="h-52 w-52 flex justify-center items-center">
              <CircularProgressbarWithChildren
                value={current}
                maxValue={total}
                styles={buildStyles({
                  pathColor: "#10B981",
                })}
              >
                <div className="flex flex-col items-center justify-center">
                  <h2 className="font-black text-5xl">
                    {percentage}
                    <span className="text-green-500">%</span>
                  </h2>
                </div>
              </CircularProgressbarWithChildren>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl">Live Stats:</h3>
              <LiveStats />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl">ICO Stats:</h3>
              <FixedStats />
            </div>
          </div>
        </div>
        <Participate />
      </div>
    );
  }
}

export default App;
