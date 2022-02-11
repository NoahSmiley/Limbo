import { Fragment } from "react";
import NaviBar from "../Navbar/NaviBar";

import LayOut from "./LayOut";
import SignUp from "../../pages/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../../pages/Login";
import HomePage from "../../pages/HomePage";

const Limbo = () => {
  return (
    <Fragment>
      <div>
        <NaviBar>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </NaviBar>
      </div>
    </Fragment>
  );
};
export default Limbo;
