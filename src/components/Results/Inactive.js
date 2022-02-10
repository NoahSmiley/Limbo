import React from "react";
import { Layout, Menu, Breadcrumb, Result } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const Inactive = () => {
  return (
    <Layout
      className="site-layout"
      style={{ background: "white", margin: "1 %" }}
    >
      <Content style={{  marginTop: "20%" }}>
        <Result title="Your Node is Currently Not Connected." />
      </Content>
      <Footer style={{ position: "relative" }}>
        MevoNode ©2022 Created by Mevo
      </Footer>
    </Layout>
  );
};
export default Inactive;
