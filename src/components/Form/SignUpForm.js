import React from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { navBarActions } from "../../store/store";
import { getBlockChain } from "../../store/store";
import { PoweroffOutlined } from "@ant-design/icons";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const trustedUser = useSelector((state) => state.navbar.trustedUser);
  const blockChain = useSelector((state) => state.navbar.blockChain);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      passtwo: "",
      api: "",
    },
    onSubmit: (value) => {
      if (blockChain !== "initial") {
        dispatch(
          navBarActions.initDatabase({
            username: value.username,
            password: value.password,
            api: value.api,
          })
        );
        dispatch(navBarActions.limboTransaction());
        dispatch(navBarActions.changeNav("loggedin"));
        navigate("/connected");
      }
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      password: Yup.string().required(),
      passtwo: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
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
        style={{ textAlign: "center" }}
        layout="vertical"
        onFinish={formik.handleSubmit}
      >
        <div style={{ backGround: "White" }}>
          <Form.Item
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
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            required
            validateStatus={
              (formik.errors.passtwo && formik.touched.passtwo && "error") ||
              (!formik.errors.passtwo && formik.touched.passtwo && "success")
            }
            hasFeedback
            help={
              formik.errors.passtwo &&
              formik.touched.passtwo &&
              "Passwords Must Match."
            }
          >
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
          </Form.Item>
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
          <br></br>
          <br />
          <Button
            type="primary"
            disabled={formik.errors.username}
            htmlType="submit"
            onClick={dispatch(getBlockChain(trustedUser))}
          >
            Join the BlockChain
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default SignUpForm;
