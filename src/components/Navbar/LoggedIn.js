import {
  TeamOutlined,
  FileOutlined,
  CalculatorOutlined,
  BlockOutlined,
  UserDeleteOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const LoggedIn = () => {
  return (
    <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
      <Menu.Item key="1" icon={<CalculatorOutlined />}>
        Mining
        <Link to="/hashing" />
      </Menu.Item>
      <Menu.Item key="2" icon={<BlockOutlined />}>
        BlockChain
        <Link to="/blockchain" />
      </Menu.Item>
      <Menu.Item key="3" icon={<TeamOutlined />}>
        Account
      </Menu.Item>
      <Menu.Item key="4" icon={<FileOutlined />}>
        Docs
      </Menu.Item>
      <Menu.Item key="5" icon={<UserDeleteOutlined />}>
        Sign Out
      </Menu.Item>
    </Menu>
  );
};
export default LoggedIn;

{
  /* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
<Menu.Item key="3">Account Info</Menu.Item>
<Menu.Item key="4">Bill</Menu.Item>
<Menu.Item key="5">Alex</Menu.Item>
</SubMenu>
<SubMenu key="sub2" icon={<TeamOutlined />} title="Account">
<Menu.Item key="6">Account</Menu.Item>
<Menu.Item key="8">Team 2</Menu.Item>
</SubMenu> */
}
