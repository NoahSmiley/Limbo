import React from "react";
import { Layout } from "antd";

const { Header, Content } = Layout;
const HashLayOut = (props) => {
  return (
    <div style={{ background: "#0f0f0f" }}>
      <Layout style={{ marginTop: "-10%", background: "#09203D" }}>
        <Header style={{ fontSize: "20px", background: "#09203D" }}>
          <p>
            <b>{props.titleone}</b>
            {props.titletwo}
          </p>
        </Header>
        <Content style={{ background: "#0f0f0f", marginTop: "2%" }}>
          {props.children}
        </Content>
      </Layout>
    </div>
  );
};
export default HashLayOut;
