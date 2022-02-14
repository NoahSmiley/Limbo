import { Fragment } from "react";
import NaviBar from "../Navbar/NaviBar";

import SignUp from "../../pages/disconnected/SignUp";
import { Routes, Route} from "react-router-dom";
import Login from "../../pages/disconnected/Login";
import HomePage from "../../pages/disconnected/HomePage";
import Connected from "../../pages/connected/Connected";
import SignOut from "../../pages/connected/SignOut";
import Docs from "../../pages/connected/Docs";
const Limbo = () => {
  return (
    <Fragment>
      <div>
        <p>Hello world</p>
        <NaviBar>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signout" element={<SignOut />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/connected" element={<Connected />} />
            <Route path="/docs" element={<Docs />} />
          </Routes>
        </NaviBar>
      </div>
    </Fragment>
  );
};
export default Limbo;
