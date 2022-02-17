import { useState, useEffect } from "react";

import "./App.css";
import Limbo from "./components/Base/Limbo";
import { useSelector, useDispatch } from "react-redux";
import { navBarActions } from "./store/store";
function App() {
  const dispatch = useDispatch();

  const limboFull = useSelector((state) => state.navbar.limboFull);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(navBarActions.checkLimbo());
      if (limboFull) {
        console.log("New item in Limbo, time to mine!");
      }
      console.log(limboFull);
    }, 5000);
    return () => clearTimeout(timer);
  }, [limboFull, dispatch]);

  return (
    <div className="App">
      <Limbo />
    </div>
  );
}

export default App;
