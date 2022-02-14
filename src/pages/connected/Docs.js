import { Card } from "antd";
import LayOut from "../../components/Base/LayOut";
const Docs = () => {
  return (
    <LayOut style={{textAlign:"left"}}>
      <Card title="Limbo Documentation" style={{marginTop:"-15%",textAlign:"left"}}>
        <Card
          type="inner"
          title="Hashing"
        >
          Hashing
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Inner Card title"
        >
          Inner Card content
        </Card>
      </Card>
      ,
    </LayOut>
  );
};
export default Docs;
