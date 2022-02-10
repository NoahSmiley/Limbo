import { Navigate, useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import "./ant.css";

import SignInLogin from "./SignInLogin";
import LoggedIn from "./LoggedIn";
import { useSelector } from "react-redux";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const NaviBar = (props) => {
  const navigate = useNavigate();

  const [collapsed, setCollaped] = useState(false);

  const onCollapse = (collapsed) => {
    setCollaped(collapsed);
  };
  const navStatus = useSelector((state) => state.navbar.navType);
  console.log(navStatus);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" style={{ textDecoration: "none" }}>
          {collapsed ? (
            <p>
              <b>Mevo</b>
            </p>
          ) : (
            <p>
              <b>Mevo</b>Node
            </p>
          )}
        </div>
        {navStatus == "login" ? <SignInLogin /> : <LoggedIn />}
      </Sider>
      {props.children}
    </Layout>
  );
};

export default NaviBar;
