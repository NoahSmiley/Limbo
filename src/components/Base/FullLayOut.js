import React from "react";
import { Layout } from "antd";
import "./LayOut.css";

const { Header, Content } = Layout;
const FullLayOut = (props) => {
  return (
    <Layout
      className="site-layout"
      style={{ marginTop: "-10%", background: "white" }}
    >
      <Header className="site-layout-background" style={{ fontSize: "20px" }}>
        <p>
          <b>{props.titleone}</b>
          {props.titletwo}

        </p>
      </Header>
      <Content style={{ background: "white", marginTop: "2%" }}>
        {props.children}
      </Content>
    </Layout>
  );
};
export default FullLayOut;
