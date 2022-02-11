import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Form,
  Input,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Button,
} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { TextField } from "@mui/material";

const LoginForm = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      pw: "",
      pw2: "",
      api: "",
    },
  });

  return (
    <div
      style={{
        textAlign: "center",
        display: "inline-block",
        marginBottom:"13%",
      }}
    >
      <Form
        wrapperCol={{
          span:30,
        }}
        align="center"
        layout="vertical"
        onFinish={formik.handleSubmit}
      >
        <div style={{ backGround: "White" }}>
          <Form.Item
          style={{textAlign: "left"}}
            label="Username"
            validateStatus={
              formik.errors.username && formik.touched.username
                ? "error"
                : "null"
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
          <Form.Item label="Password">
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
          <br/>
          <Button
            type="primary"
            disabled={formik.errors.username}
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
