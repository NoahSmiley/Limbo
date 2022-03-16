import { Card } from "antd";
import LayOut from "../../components/Base/LayOut";
const Docs = () => {
  return (
    <LayOut style={{textAlign:"left"}}>
      <Card title="Limbo Documentation" style={{marginTop:"-15%",textAlign:"left"}}>
        <Card
          type="inner"
          title="Our Application"
        >
          Hashing
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="How our Application Works"
        >
          <pre>Hello</pre>
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Why Blockchains?"
        >
          <pre>Hello</pre>
        </Card>
      </Card>
      ,
    </LayOut>
  );
};
export default Docs;
