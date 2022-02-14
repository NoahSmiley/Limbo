import {
  UserAddOutlined,
  UnlockOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import {NavLink } from "react-router-dom";
const SignInLogin = () => {
  return (
    <Menu theme="dark" defaultSelectedKeys={["5"]} mode="inline">
      <Menu.Item key="5" icon={<HomeOutlined />}>
        Welcome!
        <NavLink to="/" />
      </Menu.Item>
      <Menu.Item key="6" icon={<UserAddOutlined />}>
        Sign Up
        <NavLink to="/signup" />
      </Menu.Item>
      <Menu.Item key="7" icon={<UnlockOutlined />}>
        Log In
        <NavLink to="/login" />
      </Menu.Item>
    </Menu>
  );
};
export default SignInLogin;
