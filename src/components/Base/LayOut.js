import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./anta.css";

const { Header, Content, Footer, Sider } = Layout;
const LayOut = (props) => {
  return (
    <Layout
      className="site-layout"
      style={{ background: "white", margin: "1 %" }}
    >
      <Header className="site-layout-background">
        <div
          className="site-layout-background"
          style={{ marginTop: "5%", fontSize: "120%" }}
        >
          <b>{props.title}</b>
        </div>
      </Header>
      <Content style={{ marginLeft: "30%", marginTop: "7%" }}>
        {props.children}
      </Content>
      <Footer style={{position:"relative"}}>MevoNode ©2022 Created by Mevo</Footer>
    </Layout>
  );
};
export default LayOut;
