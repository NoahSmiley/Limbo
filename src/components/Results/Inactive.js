import React from "react";
import { Result} from "antd";

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
