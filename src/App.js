import { useEffect } from "react";

import "./App.css";
import Limbo from "./components/Base/Limbo";
import { useSelector, useDispatch } from "react-redux";
import { navBarActions } from "./store/store";
import { hashSliceActions } from "./store/hashSlice";
import {getBlockChain} from "./store/store"
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
  const credits = useSelector((state) => state.navbar.credits);
  const hashRate = useSelector((state) => state.hashSlice.hashRate);
  
  useEffect(() => {
    if (limboFull && !solved) {
      dispatch(hashSliceActions.setMiningStatus("Mining"))
      const newTimer = setInterval(() => {
        dispatch(hashSliceActions.mine(limbo));
      }, 10*hashRate);
      return () => clearTimeout(newTimer);
    }
  }, [limboFull, dispatch, limbo, solved, hashValue]);

  useEffect(() => {
    if (limboFull && solved && limbo !== "") {
      let block = { POW: hashValue, stamp: new Date(), transaction: limbo };
      dispatch(navBarActions.setBlockChain(block));
      dispatch(navBarActions.setLimbo(""));
      dispatch(navBarActions.setLimboFull(false));
      dispatch(navBarActions.setTransaction({}));
      dispatch(hashSliceActions.setHashValue(null));
      dispatch(hashSliceActions.setSolved(false));
      dispatch(navBarActions.addCredit())
      dispatch(navBarActions.blockChainTransaction());
      dispatch(hashSliceActions.setMiningStatus("Scanning Limbo"))
      console.log(credits)
      
    }
  }, [dispatch, limbo, limboFull, hashValue, solved]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (loggedin === "loggedin") {
        const getData = async () => {
          const response = await fetch(`${apiValue}/blockChain.json`);
          const response2 = await fetch(`${apiValue}/limbo.json`);
          const credits = await fetch(`${apiValue}/credits.json`);
          const trustedUser = await fetch(`${trusted}/blockChain.json`);
          const data = await response.json();
          const data2 = await response2.json();
          const trustedData = await trustedUser.json();
          const creditData = await credits.json();

          let blockList = []
          for (const [key, value] of Object.entries(data)) {
            blockList.push({transaction:value.transaction,timeStamp:value.stamp});
          }
          console.log(blockList)
          blockList.reverse()
          dispatch(hashSliceActions.setBlockList(blockList))
          dispatch(navBarActions.setCredits(creditData))
          if (data2 !== "") {
            dispatch(navBarActions.setLimbo(data2));
            dispatch(navBarActions.setLimboFull(true));
          }
        if (Object.keys(data).length<Object.keys(trustedData).length) {
            dispatch(navBarActions.setBlockChain(trustedData));
            const postData = async () => {
              const response = await fetch(`${apiValue}/blockChain.json`, {
                method: "PUT",
                body: JSON.stringify(blockChain),
              });
              const data = await response.json()}
              postData();
          }
        };
        getData();
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
