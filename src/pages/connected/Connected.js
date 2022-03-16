import FullLayOut from "../../components/Base/FullLayOut";
import ConnectedResult from "../../components/Results/ConnectedResult";
import { Modal, Button } from "antd";
import { useEffect, useState } from "react";
import MainStats from "../../components/Stats/MainStats";
import { useDispatch, useSelector } from "react-redux";
import { navBarActions } from "../../store/store";
const Connected = () => {
  const modal = useSelector((state)=>state.navbar.modal)
  const dispatch = useDispatch()

  return (
    <div>
      <Modal
        style={{ marginLeft: "38%" }}
        title="Node Connection Staus"
        visible={modal}
        onOk={()=>dispatch(navBarActions.setModal(false))}
        onCancel={()=>dispatch(navBarActions.setModal(false))}
        footer={[
          <Button key="submit" type="primary" onClick={()=>dispatch(navBarActions.setModal(false))}>
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
