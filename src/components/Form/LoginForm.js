import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Input, Button } from "antd";
import { navBarActions } from "../../store/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { getBlockChain } from "../../store/store";
const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      api:""
    },
    onSubmit: (value) => {
      navigate("/connected");
      dispatch(navBarActions.setAPI(value.api))
      dispatch(navBarActions.changeNav("loggedin"));
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      password: Yup.string().required(),
      api: Yup.string().required().url(),
    }),
  });

  return (
    <div
      style={{
        textAlign: "center",
        display: "inline-block",
        marginBottom: "13%",
      }}
    >
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
            label="Username"
            required
            validateStatus={
              (formik.errors.username && formik.touched.username && "error") ||
              (!formik.errors.username && formik.touched.username && "success")
            }
            hasFeedback
            help={
              formik.errors.username &&
              formik.touched.username &&
              "Username Required"
            }
          >
            <Input
              id="username"
              value={formik.username}
              placeholder="Username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>
          <Form.Item
            label="Password"
            validateStatus={
              (formik.errors.password && formik.touched.password && "error") ||
              (!formik.errors.password && formik.touched.password && "success")
            }
            hasFeedback
            required
            help={
              formik.errors.password &&
              formik.touched.password &&
              "Password Required"
            }
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
            <br />
            <br />
            <Form.Item
              required
              validateStatus={
                (formik.errors.api && formik.touched.api && "error") ||
                (!formik.errors.api && formik.touched.api && "success")
              }
              hasFeedback
              style={{ textAlign: "left" }}
              label="API Link"
              help="https://example-be16f-default-rtdb.firebaseio.com/"
            >
              <Input
                id="api"
                placeholder="API Link (https://example.firebaseio.com/)"
                value={formik.api}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </Form.Item>
          </Form.Item>
          <br />
          <Button
            type="primary"
            disabled={formik.errors.username || formik.errors.password}
            htmlType="submit"
          >
            Connect Node
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default LoginForm;
