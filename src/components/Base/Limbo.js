import { Fragment } from "react";
import NaviBar from "../Navbar/NaviBar";
import { useEffect } from "react";
import SignUp from "../../pages/disconnected/SignUp";
import { Routes, Route } from "react-router-dom";
import Login from "../../pages/disconnected/Login";
import HomePage from "../../pages/disconnected/HomePage";
import Connected from "../../pages/connected/Connected";
import SignOut from "../../pages/connected/SignOut";
import Docs from "../../pages/connected/Docs";
import { useDispatch, useSelector } from "react-redux";
import { getBlockChain } from "../../store/store";
import Feed from "../../pages/connected/Feed";
import HashLab from "../../pages/connected/HashLab";
import Account from "../../pages/connected/Account";
import Mining from "../../pages/connected/Mining";
const Limbo = () => {
  return (
    <Fragment>
      <div>
        <NaviBar>
          <Routes>
            <Route path="/account" element={<Account />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signout" element={<SignOut />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/mining" element={<Mining/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/connected" element={<Connected />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/lab" element={<HashLab />} />
          </Routes>
        </NaviBar>
      </div>
    </Fragment>
  );
};
export default Limbo;
