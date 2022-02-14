import {
  TeamOutlined,
  FileOutlined,
  CalculatorOutlined,
  BlockOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const LoggedIn = () => {
  return (
    <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
      <Menu.Item key="1" icon={<CalculatorOutlined />}>
        Status
        <Link to="/connected" />
      </Menu.Item>
      <Menu.Item key="2" icon={<BlockOutlined />}>
        BlockChain
        <Link to="/blockchain" />
      </Menu.Item>
      <Menu.Item key="3" icon={<TeamOutlined />}>
        Account
      </Menu.Item>
      <Menu.Item key="5" icon={<UserDeleteOutlined />}>
        Sign Out
        <Link to="/signout" />
      </Menu.Item>
      <Menu.Item key="4" icon={<FileOutlined />}>
        Docs
        <Link to="/docs" />
      </Menu.Item>
    </Menu>
  );
};
export default LoggedIn;

