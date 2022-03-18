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
  const trusted = useSelector((state) => state.navbar.trustedUsers);
  const credits = useSelector((state) => state.navbar.credits);
  const hashRate = useSelector((state) => state.hashSlice.hashRate);
  const localMessages = useSelector((state) => state.navbar.messages);
  const trustedUsers = useSelector((state) => state.navbar.trustedUsers);
  useEffect(() => {
    if (limboFull && !solved) {
      dispatch(hashSliceActions.setMiningStatus("Mining"));
      const newTimer = setInterval(() => {
        dispatch(hashSliceActions.mine(limbo));
      }, 10 * hashRate.rate);
      return () => clearTimeout(newTimer);
    }
  }, [limboFull, dispatch, limbo, solved, hashValue,hashRate]);

  useEffect(() => {
    if (limboFull && solved && limbo !== "") {
      let block = { POW: hashValue, stamp: new Date(), transaction: limbo };
      dispatch(navBarActions.setBlockChain(block));
      dispatch(navBarActions.setLimbo(""));
      dispatch(navBarActions.setLimboFull(false));
      dispatch(navBarActions.setTransaction({}));
      dispatch(hashSliceActions.setHashValue(null));
      dispatch(hashSliceActions.setSolved(false));
      dispatch(navBarActions.addCredit());
      dispatch(navBarActions.blockChainTransaction());
      dispatch(hashSliceActions.setMiningStatus("Scanning Limbo"));
    }
  }, [dispatch, limbo, limboFull, hashValue, solved]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (loggedin === "loggedin") {
        const getData = async () => {
          const response = await fetch(`${apiValue}blockChain.json`);
          const response2 = await fetch(`${apiValue}limbo.json`);
          const userCredits = await fetch(`${apiValue}credits.json`);
          const messages = await fetch(`${apiValue}messages.json`);
          const trustedUser = await fetch(`${trusted[0]}blockChain.json`);
          const trustedMessages = await fetch(`${trusted[0]}messages.json`);
          
          const data = await response.json();
          const data2 = await response2.json();
          const trustedData = await trustedUser.json();
          const userCreditData = await userCredits.json();
          const messageData = await messages.json();
          const trustedMessageData = await trustedMessages.json();


          let blockList = [];
          console.log("HERE IS VALUE")

          if (Object.keys(data).length < Object.keys(trustedData).length) {
            dispatch(navBarActions.setBlockChain(trustedData));
            const postData = async () => {
              const response = await fetch(`${apiValue}blockChain.json`, {
                method: "PUT",
                body: JSON.stringify(blockChain),
              });
              const data = await response.json();
            };
            postData();
          }
          for (const [key, value] of Object.entries(data)) {
            if(value.transaction.action&&value.transaction&&value.stamp){
              blockList.push({
                transaction: value.transaction,
                timeStamp: value.stamp,
                action: value.transaction.action,
              });
            }
            }
          blockList.reverse();

          dispatch(hashSliceActions.setBlockList(blockList));
          dispatch(navBarActions.setCredits(userCreditData));
          if (localMessages.length!==Object.keys(trustedMessageData).length){
            if (localMessages.length===0){
              dispatch(navBarActions.updateMessages({api:apiValue,messages:trustedMessageData}))
            }
            // dispatch(navBarActions.setMessages(trustedMessageData))
            let messageList = [];
            for (const [key, value] of Object.entries(trustedMessageData)) {
              messageList.push({
                author: value.author,
                text: value.text,
                time: value.time,
              });
            }
            
            dispatch(navBarActions.setMessages(messageList));
          }
          if (data2 !== ""&& trustedUsers.indexOf(apiValue)!==-1) {
            dispatch(navBarActions.setLimbo(data2));
            dispatch(navBarActions.setLimboFull(true));
          }
          
        };
        getData();
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [limboFull, dispatch, blockChain, apiValue, loggedin, limbo, trusted,trustedUsers,localMessages]);

  return (
    <div className="App">
      <Limbo />
    </div>
  );
}

export default App;
