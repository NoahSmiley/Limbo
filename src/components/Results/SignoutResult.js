import { Result, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { navBarActions } from "../../store/store";
const SignoutResult = () => {
    const dispatch = useDispatch()

    const ClickHandler = () => {
        dispatch(navBarActions.changeNav("login"))
    }
  return (
    <Result
      status="warning"
      title="There are some problems with your operation."
      extra={
        <Link to="/">
          <Button type="primary" key="console" onClick={ClickHandler}>
            Disconnect Node
          </Button>
        </Link>
      }
    />
  );
};
export default SignoutResult;
