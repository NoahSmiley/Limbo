import FullLayOut from "../../components/Base/FullLayOut";
import ConnectedResult from "../../components/Results/ConnectedResult";
import { Modal, Button } from "antd";
import { useState } from "react";
import MainStats from "../../components/Stats/MainStats";
const Connected = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Modal
        style={{ marginLeft: "38%" }}
        title="Node Connection Staus"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Sounds Good!
          </Button>,
        ]}
      >
        <ConnectedResult />
      </Modal>
      <FullLayOut titleone="Limbo"titletwo="Node">
        <MainStats />
      </FullLayOut>
    </div>
  );
};
export default Connected;
