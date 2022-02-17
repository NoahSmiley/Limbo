import "./App.css";
import { useEffect, useState } from "react";
import sha256 from "crypto-js/sha256";
import BigBoi from "./BigBoi";
import ExperimentOutlined from "@ant-design/icons";
const Hash = () => {
  const [finisedTimer, setFinisedTimer] = useState(new Date());
  const [mineState, setMineState] = useState(false);
  const [proofOfWork, setproofOfWork] = useState(0);
  const [printVal, setprintVal] = useState("");
  const [message, setMessage] = useState("");
  const [zeros, setZeros] = useState(0);
  const [timer, setTimer] = useState(new Date());
  const [solveTime, setSolveTime] = useState(0);
  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };
  const zerosChangeHandler = (event) => {
    setZeros(event.target.value);
    setSolved(false);
  };
  const [solved, setSolved] = useState(false);

  const mineStateHandler = () => {
    setTimer(new Date());
    if (solved) {
      setSolved(false);
      setHash(
        sha256("arbitary value")
        /*
        
        Each block consists of

        - Hash of previous block
        - Number
        - Date minting began
        - List of transactions
        - Proof of work


        Each transaction consists of

        POST
        - Number
        - Type
        - Username
        - Title
        - Post
        - Signature

        USER AUTH
        - Number
        - Type
        - Username
        - Public key


        Transaction list example

        1 // post // evosity // birds arent real // birds are simply not real. they are government spies. // 010010100010100101...
        2 // post // throw // birds are real // evosity is dumb // 1010010101010000100...
        3 // post // evosity // dear throw // you are a corn-fed simpleton. // 111110010010110...
        4 // user // rayray // 010101001010100101... // 10010100101010010...
        5 // post // ejoaq // throw is right. birds are a man made concept // *ranting about energy* //1010010101001010100...
        6 // post // throw // this project was a mistake // clearly humanity wasn't ready for this level of freedom. // 10101001010101001010...
        
        */
      );
    }
    setMineState((prevVal) => {
      setSolveTime(0);
      setproofOfWork(0);
      setprintVal("");
      return !prevVal;
    });
  };

  const [hash, setHash] = useState(
    sha256("prev_block_hash--number--date--transaction_list--proof_of_work")
  );

  const solvedHandler = () => {
    setSolved(true);
    setSolveTime(
      Number(finisedTimer.getSeconds()) - Number(timer.getSeconds())
    );

    setMineState(false);
    setprintVal(proofOfWork);
  };

  useEffect(() => {
    if (mineState && !solved) {
      const timer = setTimeout(() => {
        setHash(sha256(`${message}--${proofOfWork}`));
        setproofOfWork((prevVal) => {
          return prevVal + 1;
        });
      }, 10);
      setFinisedTimer(new Date());
      return () => clearTimeout(timer);
    }
  }, [hash, mineState, proofOfWork, setFinisedTimer, solved, message]);

  return (
    <div className="App" style={{ marginTop: "-10%" }}>
      <p>
        <b>Hash</b>Lab
      </p>

      <BigBoi val={hash} zeros={zeros} onSolve={solvedHandler} />

      <p>Proof of Work: {proofOfWork}</p>
      <form>
        <label for="message">Message</label>
        <br />
        <input
          type="text"
          id="message"
          name="message"
          onChange={messageChangeHandler}
          value={message}
        ></input>
        <br />
        <label for="zeros">Number of zeros</label>
        <br />
        <input
          type="number"
          id="zeros"
          name="zeros"
          onChange={zerosChangeHandler}
          value={zeros}
        />
        <br />
      </form>

      <button onClick={mineStateHandler} style={{ margin: "10px" }}>
        Mine
      </button>
    </div>
  );
};

export default Hash;
