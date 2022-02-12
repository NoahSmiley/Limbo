import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
const Inactive = () => {
  return (
    <div
      className="site-layout-background"
      style={{ marginBottom: "25%", paddingTop: "5%" }}
    >
      <Result
        title="Your Node is Currently Not Connected."
        subTitle="Lets change that, Login or Sign Up to Connect Node."
      />
    </div>
  );
};
export default Inactive;
