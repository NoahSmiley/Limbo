import { Fragment } from "react";
import NaviBar from "../Navbar/NaviBar";

import SignUp from "../../pages/disconnected/SignUp";
import { Routes, Route, useNavigate} from "react-router-dom";
import Login from "../../pages/disconnected/Login";
import HomePage from "../../pages/disconnected/HomePage";
import Connected from "../../pages/connected/Connected";
import SignOut from "../../pages/connected/SignOut";
import Docs from "../../pages/connected/Docs";

import Feed from "../../pages/connected/Feed";
import HashLab from "../../pages/connected/HashLab";
import Account from "../../pages/connected/Account";
import Mining from "../../pages/connected/Mining";
import { useEffect } from "react";
const Limbo = () => {
  const url = useNavigate();

  useEffect(() => {
    url("/");
  }, []);

  return (
    <Fragment>
      <NaviBar>
        <Routes>
          <Route path="/account" element={<Account />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/mining" element={<Mining />} />
          <Route path="/login" element={<Login />} />
          <Route path="/connected" element={<Connected />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/lab" element={<HashLab />} />
        </Routes>
      </NaviBar>
    </Fragment>
  );
};
export default Limbo;
