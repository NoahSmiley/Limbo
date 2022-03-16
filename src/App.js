import { useEffect } from "react";

import "./App.css";
import Limbo from "./components/Base/Limbo";
import { useSelector, useDispatch } from "react-redux";
import { navBarActions } from "./store/store";
import { hashSliceActions } from "./store/hashSlice";
function App() {
  const dispatch = useDispatch();

  const limboFull = useSelector((state) => state.navbar.limboFull);
  const apiValue = useSelector((state) => state.navbar.api);
  const loggedin = useSelector((state) => state.navbar.navType);
  const blockChain = useSelector((state) => state.navbar.blockChain);
  const limbo = useSelector((state) => state.navbar.limbo);
  const solved = useSelector((state) => state.hashSlice.solved);
  const hashValue = useSelector((state) => state.hashSlice.hashValue);
  const trusted = useSelector((state) => state.navbar.trustedUser);

  useEffect(() => {
    if (limboFull && !solved) {
      const newTimer = setInterval(() => {
        dispatch(hashSliceActions.mine(limbo));
      }, 10);
      return () => clearTimeout(newTimer);
    }
  }, [limboFull, dispatch, limbo, solved, hashValue]);

  useEffect(() => {
    if (limboFull && solved && limbo !== "") {
      let block = { POW: hashValue, stamp: new Date(), transaction: limbo };
      dispatch(navBarActions.setBlockChain(block));
      dispatch(navBarActions.setLimbo(""));
      dispatch(navBarActions.blockChainTransaction());
      dispatch(navBarActions.setLimboFull(false));
      dispatch(navBarActions.setTransaction({}));
      dispatch(hashSliceActions.setHashValue(null));
      dispatch(hashSliceActions.setSolved(false));
    }
  }, [dispatch, limbo, limboFull, hashValue, solved]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (loggedin === "loggedin") {
        if (limboFull) {
          console.log("New item in Limbo, time to mine!");
          console.log("HERE IS LIMBO", limbo);
        }
        const getData = async () => {
          const response = await fetch(`${apiValue}/blockChain.json`);
          const response2 = await fetch(`${apiValue}/limbo.json`);
          const trustedUser = await fetch(`${trusted}/blockChain.json`);
          const data = await response.json();
          const data2 = await response2.json();
          const trustedData = await trustedUser.json();
          console.log(data);
          console.log("limbo", data2);
          // const dataObject = data.blockChain;
          if (data2 !== "") {
            dispatch(navBarActions.setLimbo(data2));
            dispatch(navBarActions.setLimboFull(true));
          }
          if (data || trustedData) {
            console.log("USER LENGTH", Object.keys(data).length);
            console.log("TRUSTED LENGTH", Object.keys(trustedData).length);
          }
        };
        getData();
        // console.log(limboFull,blockChain);
        // console.log(apiValue)
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [limboFull, dispatch, blockChain, apiValue, loggedin, limbo, trusted]);

  return (
    <div className="App">
      <Limbo />
    </div>
  );
}

export default App;
