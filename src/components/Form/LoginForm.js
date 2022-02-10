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
} from "antd";
import { Button } from "@mui/material"
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
    <Form
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="vertical"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <Form.Item label="Email Address">
        <Input type="email" placeholder="Email Address" />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Button
        type="primary"
        style={{ marginRight: "45%", marginTop: "5%", marginBottom: "10%" }}
      >
        Login
      </Button>
    </Form>
  );
};
export default LoginForm;
