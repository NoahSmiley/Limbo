import { useEffect } from "react";

import "./App.css";
import Limbo from "./components/Base/Limbo";
import { useSelector, useDispatch } from "react-redux";
import { navBarActions } from "./store/store";
import { hashSliceActions } from "./store/hashSlice";
// import { getBlockChain } from "./store/store";
function App() {
  const dispatch = useDispatch();

  const limboFull = useSelector((state) => state.navbar.limboFull);
  const apiValue = useSelector((state) => state.navbar.api);
  const loggedin = useSelector((state) => state.navbar.navType);
  const blockChain = useSelector((state) => state.navbar.blockChain);
  const limbo = useSelector((state) => state.navbar.limbo);
  const solved = useSelector((state) => state.hashSlice.solved);
  const hashValue = useSelector((state) => state.hashSlice.hashValue);

  useEffect(() => {
    if (limboFull && !solved) {
      const newTimer = setInterval(() => {
        dispatch(hashSliceActions.mine(limbo));
      }, 10);
      return () => clearTimeout(newTimer);
    }

    if (limboFull && solved && limbo !== "empty") {
      let block = { POW: hashValue, stamp: new Date(), transaction: limbo };
      dispatch(navBarActions.setBlockChain(block));
      dispatch(navBarActions.setLimbo("empty"));
      dispatch(navBarActions.blockChainTransaction());
      dispatch(navBarActions.setLimboFull(false));
      dispatch(navBarActions.setTransaction({}));
    }
  }, [limboFull, dispatch, limbo, solved, hashValue]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (loggedin === "loggedin") {
        if (limboFull) {
          console.log("New item in Limbo, time to mine!");
          console.log("HERE IS LIMBO", limbo);
        }
        const getData = async () => {
          const response = await fetch(apiValue);
          const data = await response.json();
          // console.log(data);
          const dataObject = { limbo: data.limbo, blockChain: data.blockChain };
          if (data.limbo) {
            dispatch(navBarActions.setLimbo(dataObject.limbo));
            dispatch(navBarActions.setLimboFull(true));
          }
          if (data.blockChain) {
            dispatch(navBarActions.setBlockChain(dataObject.blockChain));
          }
        };
        getData();
        // console.log(limboFull,blockChain);
        // console.log(apiValue)
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [limboFull, dispatch, blockChain, apiValue, loggedin, limbo]);

  return (
    <div className="App">
      <Limbo />
    </div>
  );
}

export default App;
