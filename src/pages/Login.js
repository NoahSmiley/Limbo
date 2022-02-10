import LayOut from "../components/Base/LayOut";
import LoginForm from "../components/Form/LoginForm";
import { Content } from "antd/lib/layout/layout";
const Login = () => {
  return (
    <LayOut title={"Log In"}>
      <div>
        <LoginForm />
      </div>
    </LayOut>
  );
};
export default Login;
