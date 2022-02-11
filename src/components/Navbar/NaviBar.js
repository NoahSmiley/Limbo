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
  const [styleObj,setStyleObj]=useState({marginLeft:"115px"})
  const onCollapse = (collapsed) => {
    setCollaped(collapsed);
    if (collapsed){
      setStyleObj({marginLeft:"0px",transitionDuration: "0.3s"})
    }else{
      setStyleObj({marginLeft:"120px",transitionDuration: "0.3s"})
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
            position:"fixed",
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
                <b>Mevo</b>
              </p>
            ) : (
              <p>
                <b>Mevo</b>Node
              </p>
            )}
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            {navStatus == "login" ? <SignInLogin /> : <LoggedIn />}
          </Menu>
        </Sider>

      <Layout className="site-layout" style={styleObj}>
        
        <Content style={{ margin: "0 16px",marginLeft:"100px",marginTop:"2%" }}>

          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center",paddingTop:"10%" }}
          >
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default NaviBar;
/* <Layout style={{ minHeight: "100vh", textAlign: "center" }}>
<Sider
  collapsible
  collapsed={collapsed}
  style={{ position: "fixed", paddingBottom: "100%" }}
  onCollapse={onCollapse}
>
  <div
    className="logo"
    style={{ textDecoration: "none", textAlign: "center" }}
  >
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
</Layout> */
