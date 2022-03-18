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
  
  let data = useSelector((state) => state.hashSlice.blockList);
  console.log(data)
  const credits = useSelector((state) => state.navbar.credits);

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
      
      {data.length!==0&&<List
        size="large"
        style={{ textAlign: "left" }}
        header={<div>Blocks:</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Descriptions title="Block:">
              <Descriptions.Item label="Time Stamp:">
                {item.timeStamp}
              </Descriptions.Item>

              <Descriptions.Item label="Action">
                {item.transaction.action}
              </Descriptions.Item>

              <Descriptions.Item label="User">
                {item.transaction.username}
              </Descriptions.Item>
            </Descriptions>
          </List.Item>
        )}
      />}
    </Row>
  );
};
export default MainStats;
