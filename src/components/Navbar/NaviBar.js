import React, { useState } from "react";
import { Layout, Menu } from "antd";

import SignInLogin from "./SignInLogin";
import LoggedIn from "./LoggedIn";
import { useSelector } from "react-redux";

const { Content, Footer, Sider } = Layout;

const NaviBar = (props) => {
  const [collapsed, setCollaped] = useState(false);
  const [styleObj, setStyleObj] = useState({ marginLeft: "115px" });
  const onCollapse = (collapsed) => {
    setCollaped(collapsed);
    if (collapsed) {
      setStyleObj({ marginLeft: "0px", transitionDuration: "0.3s" });
    } else {
      setStyleObj({ marginLeft: "120px", transitionDuration: "0.3s" });
    }
  };
  const navStatus = useSelector((state) => state.navbar.navType);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          overflow: "auto",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          className="logo"
          style={{ textDecoration: "none", textAlign: "center" }}
        >
          {collapsed ? (
            <p>
              <b>Limbo</b>
            </p>
          ) : (
            <p>
              <b>Limbo</b>Node
            </p>
          )}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          {navStatus === "login" ? <SignInLogin /> : <LoggedIn />}
        </Menu>
      </Sider>

      <Layout className="site-layout" style={styleObj}>
        <Content
          style={{ margin: "0 16px", marginLeft: "100px", marginTop: "2%" }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center", paddingTop: "10%" }}
          >
            {props.children}
          </div>
        </Content>
        <Footer style={{ marginLeft: "100px" }}>
          Limbo ©2022 Created by Limbo Team
        </Footer>
      </Layout>
    </Layout>
  );
};
export default NaviBar;
