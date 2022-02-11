import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";

import "./anta.css";

const { Header, Content, Footer, Sider } = Layout;
const LayOut = (props) => {
  return (
    <Layout className="site-layout" >
      <Header className="site-layout-background" >
          <b>{props.title}</b>
      </Header>
      <Content style={{ background: "white"}}
        // style={{ marginLeft: "40%", marginTop: "10%" }}
      >
        {props.children}
      </Content>
    </Layout>
  );
};
export default LayOut;
