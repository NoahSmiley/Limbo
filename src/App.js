import { useState, useEffect } from "react";

import "./App.css";
import Limbo from "./components/Base/Limbo";
import { useSelector, useDispatch } from "react-redux";
import { navBarActions } from "./store/store";
import { getBlockChain } from "./store/store";
function App() {
  const dispatch = useDispatch();

  const limboFull = useSelector((state) => state.navbar.limboFull);
  const apiValue = useSelector((state) => state.navbar.api);
  const loggedin = useSelector((state) => state.navbar.navType);
  const blockChain = useSelector((state) => state.navbar.blockChain);


  useEffect(() => {
    const timer = setInterval(() => {
      if(loggedin==="loggedin"){

        if (limboFull) {
          console.log("New item in Limbo, time to mine!");
        }
        const getData = async () => {
          const response = await fetch(apiValue);
          const data = await response.json();
          console.log(data);
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
      console.log(limboFull,blockChain);
      console.log(apiValue)
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [limboFull, dispatch,blockChain,apiValue,loggedin]);

  return (
    <div className="App">
      <Limbo />
    </div>
  );
}

export default App;
