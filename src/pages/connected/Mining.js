import React, { Fragment,useState } from "react";
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
  Slider,
} from "antd";
import { navBarActions } from "../../store/store";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import FormList from "antd/lib/form/FormList";

const { Header, Content } = Layout;
const Mining = () => {
  function formatter(value) {
    return `${value} ms`;
  }
  const formik = useFormik({
    initialValues: {
      hashRate: 10,
    },
    onSubmit: (value) => {
      console.log(value);
    },
    validationSchema: Yup.object({
      hashRate: Yup.string(),
    }),
  });
  const [hasChanged,setHasChanged]=useState(false)

  return (
    <div style={{ marginTop: "-10%", background: "white" }}>
      <Header
        className="site-layout-background"
        style={{ fontSize: "20px", marginBottom: "2%" }}
      >
        <p>
          <b>Mining</b>
          Manager
        </p>
      </Header>
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic title="Miner Status:" value={"Scanning Limbo"} />
          </Card>
          <br />
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
                  label="Set Hash Rate"
                >
                  <Slider
                  id="hashRate"
                    defaultValue={formik.values.hashRate}
                    onChange={formik.handleChange}
                    onChange={()=>setHasChanged(true)}
                    min={1}
                    onBlur={formik.handleBlur}
                    max={20}
                    marks={{10:"Default (10ms)"}}
                    tipFormatter={formatter}
                  />
                </Form.Item>

                <Button type="primary" htmlType="submit" disabled={!hasChanged}>
                  Update Hash Rate
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Mining;
