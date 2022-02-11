import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
// import { Button } from "@mui/material";
import * as Yup from "yup";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import FormList from "antd/lib/form/FormList";
import { useDispatch } from "react-redux";
import { navBarActions } from "../../store/store";
const SignUpForm = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      passtwo: "",
      api: "",
    },
    onSubmit: (value) => {
      console.log(value);
      <Link to="/"></Link>;
      navigate("/");
      dispatch(navBarActions.changeNav("loggedin"));
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
    }),
  });

  return (
    <div  style={{ textAlign:"center",display:"inline-block",marginBottom:"13%"}}>
      <Form
        wrapperCol={{
          span: 30,
        }}
        align="center"
        style={{ textAlign:"center" }}
        layout="vertical"
        onFinish={formik.handleSubmit}
      >
        <div style={{ backGround: "White" }}>
          <Form.Item
          
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
          <Form.Item label="Password Again">
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
              <br></br><br />
          <Button
            type="primary"
            disabled={formik.errors.username}
            htmlType="submit"
          >
            Join the BlockChain
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default SignUpForm;
