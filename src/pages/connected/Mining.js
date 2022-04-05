import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, Col, Card, Statistic, Row, Layout, Slider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { hashSliceActions } from "../../store/hashSlice";
const { Header, Content } = Layout;
const Mining = () => {
  const dispatch = useDispatch();
  const hashRate = useSelector((state) => state.hashSlice.hashRate);
  function formatter(value) {
    return `${value} ms`;
  }
  const formik = useFormik({
    initialValues: {
      hashRate: hashRate.rate,
    },
    onSubmit: (value) => {
      dispatch(hashSliceActions.setHashRate(value.hashRate));
      console.log(value.hashRate);
      console.log("ACTUAL STATE", hashRate);
    },
    validationSchema: Yup.object({
      hashRate: Yup.string(),
    }),
  });

  let miningStatus = useSelector((state) => state.hashSlice.miningStatus);
  // miningStatus.reverse()
  const credits = useSelector((state) => state.navbar.credits);
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
            <Statistic title="Miner Status:" value={miningStatus} />
          </Card>
          <br />
          <Card>
            <Statistic title="Current Credits (Lim)" value={credits} />
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
                    defaultValue={hashRate.rate}
                    onChange={(value) =>
                      formik.setFieldValue("hashRate", value)
                    }
                    min={5}
                    max={15}
                    marks={{ 10: "Default (10ms)" }}
                    tipFormatter={formatter}
                    value={formik.values.hashRate}
                  />
                </Form.Item>

                <Button type="primary" htmlType="submit">
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
