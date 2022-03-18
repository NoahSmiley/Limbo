import {
  TeamOutlined,
  FileOutlined,
  CalculatorOutlined,
  BlockOutlined,
  UserDeleteOutlined,
  RiseOutlined,
  ToTopOutlined,
  PoweroffOutlined,
  FileDoneOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Menu, Badge, Space } from "antd";
import { Link } from "react-router-dom";

const LoggedIn = () => {
  const credits = useSelector((state)=>state.navbar.credits)
  return (
    <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
      <Menu.Item key="1" icon={<RiseOutlined />}>
        Limbo
        <Link to="/connected" />
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={
          <Badge
            count={credits}
            style={{
              backgroundColor: "#52c41a",
              textAlign: "center",
            }}
          />
        }
      >
        Mining
        <Link to="/mining" />
      </Menu.Item>

      <Menu.Item key="6" icon={<BlockOutlined />}>
        Feed
        <Link to="/feed" />
      </Menu.Item>
      {/* <Menu.Item key="3" icon={<TeamOutlined />}>
        Account
        <Link to="/account" />
      </Menu.Item> */}
      <Menu.Item key="8" icon={<ExperimentOutlined />}>
        Hash Lab
        <Link to="/lab" />
      </Menu.Item>
      <Menu.Item key="4" icon={<FileDoneOutlined />}>
        Docs
        <Link to="/docs" />
      </Menu.Item>
      <Menu.Item key="5" icon={<PoweroffOutlined />}>
        Disconnect Node
        <Link to="/signout" />
      </Menu.Item>
    </Menu>
  );
};
export default LoggedIn;
