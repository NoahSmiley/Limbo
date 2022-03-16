import { Card } from "antd";
import LayOut from "../../components/Base/LayOut";
const Docs = () => {
  return (
    <LayOut style={{textAlign:"left"}}>
      <Card title="Limbo Documentation" style={{marginTop:"-15%",textAlign:"left"}}>
        <Card
          type="inner"
          title="Mevo"
        >
          Mevo is just like the most popular social media applications with a bit of a twist.
          Our application will not store data in a central location but, will use Google Firebase 
          to give all users with accounts there own personal blockchain with application data.

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
          Blockchains have recently become a buzz word with the rise of cryptocurrencies. 
          However, blockchains are not limited to cryptocurrencies they are simply a way of 
          storing data.
        </Card>
      </Card>
      ,
    </LayOut>
  );
};
export default Docs;
