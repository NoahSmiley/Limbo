import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Form,
  Input,
  Button,
  Divider,
  Col,
  Card,
  Statistic,
  Row,
  Layout,
} from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";

const { Header, Content } = Layout;
const Account = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (value) => {
    },
    validationSchema: Yup.object({
      username: Yup.string(),
      password: Yup.string(),
      passtwo: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
  });

  return (
    <div style={{ marginTop: "-10%", background: "white" }}>
      <Header className="site-layout-background" style={{ fontSize: "20px",marginBottom:"2%" }}>
        <p>
          <b>Account</b>
          Manager
        </p>
      </Header>
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic title="Current Credits (Lim)" value={3} />
          </Card>
        </Col>

        <Col span={12}>
          <Card>
            <Form
              wrapperCol={{
                span: 30,
              }}
              align="center"
              layout="vertical"
              onFinish={formik.handleSubmit}
            >
              <div style={{ backGround: "White" }}>
                <Form.Item
                  style={{ textAlign: "center" }}
                  label="Update Password"
                >
                  <Input.Password
                    id="password"
                    value={formik.password}
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>
                <Form.Item label="Confirm Password">
                  <Input.Password
                    id="passtwo"
                    value={formik.passtwo}
                    placeholder="Re-Type Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                  <br />
                  <br />
                  <Button type="primary" htmlType="submit">
                    Update Password
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Account;
