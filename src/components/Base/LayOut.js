import React from "react";
import { Layout} from "antd";

import "./LayOut.css";

const { Header, Content} = Layout;
const LayOut = (props) => {
  return (
    <Layout className="site-layout" >
      <Header className="site-layout-background" >
          <b>{props.title}</b>
      </Header>
      <Content style={{ background: "white"}}
      >
        {props.children}
      </Content>
    </Layout>
  );
};
export default LayOut;
