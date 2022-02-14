import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { navBarActions } from "../../store/store";
const SignoutResult = () => {
  const dispatch = useDispatch();

  const ClickHandler = () => {
    dispatch(navBarActions.changeNav("login"));
  };
  return (
    <Result
      status="warning"
      title="Signing out will disconnect your node."
      subTitle="Once disconnected, you will stop mining - and the production of credits will hault."
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
