import {
  Row,
  Col,
  Button,
  Statistic,
  Card,
  List,
  Divider,
  Typography,
  Descriptions,
} from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
const MainStats = () => {
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];
const credits = useSelector((state)=>state.navbar.credits)
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Card>
          <Statistic title="Active Nodes" value={1} />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic title="Current Credits (Lim)" value={credits} />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="Credit Increase"
            value={0}
            precision={2}
            valueStyle={{ color: "#3f8600" }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="Current Hash Rate"
            value={10}
            precision={2}
            valueStyle={{ color: "#cf1322" }}
            prefix={<ArrowDownOutlined />}
            suffix="ms"
          />
        </Card>
      </Col>
      <Divider orientation="left">Block Ledger:</Divider>
      <List
        size="large"
        style={{ textAlign: "left" }}
        header={<div>Transactions:</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Descriptions title="Node 2347">
              <Descriptions.Item label="UserName">
                Zhou Maomao
              </Descriptions.Item>
              <Descriptions.Item label="Action">Post</Descriptions.Item>
              <Descriptions.Item label="Live">
                Hangzhou, Zhejiang
              </Descriptions.Item>
              <Descriptions.Item label="Remark">empty</Descriptions.Item>
              <Descriptions.Item label="Address">
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
              </Descriptions.Item>
            </Descriptions>
          </List.Item>
        )}
      />
    </Row>
  );
};
export default MainStats;
