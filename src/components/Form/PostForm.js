import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Input, Button, Tooltip } from "antd";
import { navBarActions } from "../../store/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const PostForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      message: "",
    },
    onSubmit: (value) => {
      console.log(value);
      navigate("/connected");
    },
    validationSchema: Yup.object({
      title: Yup.string().required(),
      message: Yup.string().required(),
    }),
  });

  return (
    <div
      style={{
        textAlign: "center",
        display: "inline-block",
        marginBottom: "13%",
        width: "400px",
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
            label="Header"
            validateStatus={
              (formik.errors.title && formik.touched.title && "error") ||
              (!formik.errors.title && formik.touched.title && "success")
            }
            hasFeedback
            help={
              formik.errors.title && formik.touched.title && "Title Required"
            }
          >
            <Input
              id="title"
              value={formik.title}
              placeholder="Header"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>
          <Form.Item
            style={{ textAlign: "center" }}
            label="Message"
            validateStatus={
              (formik.errors.message && formik.touched.message && "error") ||
              (!formik.errors.message && formik.touched.message && "success")
            }
            hasFeedback
            help={
              formik.errors.message &&
              formik.touched.message &&
              "Message Required"
            }
          >
            <Input.TextArea
              id="message"
              value={formik.message}
              placeholder="Message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              showCount
              rows={5}
              maxLength={256}
            />
          </Form.Item>
          <br />
          <span style={{ color: "lightgray" }}> Current Credits: 3</span>
          <br />
          <br />
          <Button
            type="primary"
            disabled={formik.errors.message || formik.errors.message}
            htmlType="submit"
            help="Current Credits: 3"
          >
            Expend Credit (-1)
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default PostForm;
