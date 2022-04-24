import React from "react";
import { Result} from "antd";

const ConnectedResult = () => {
  return (
    <div
      className="site-layout-background"
      style={{ marginBottom: "25%", paddingTop: "5%" }}
    >
      <Result
        status="success"
        title="Successfully Connected Node to Network!"
        subTitle="Confirmation number: 2017182818828182881 nodes can takes 1-5 minute to register, please wait."

      />
      ,
    </div>
  );
};
export default ConnectedResult;
