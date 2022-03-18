import { Card } from "antd";
import LayOut from "../../components/Base/LayOut";
const Docs = () => {
  return (
    <LayOut style={{textAlign:"left"}}>
      <Card title="Limbo Documentation" style={{marginTop:"-15%",textAlign:"left"}}>
        <Card
          type="inner"
          title="What is Mevo?"
        >
          Mevo is just like the most popular social media applications with a bit of a twist.
          The main motivation behined Mevo is to provide a place were people can meet and communicate 
          without being held to any societal standards by the moderaters of the application.
          In doing this our application will not store data in a central location but, will use Google 
          Firebase to give all users with accounts there own personal blockchain with application data.
          On top of that all data will be encripted using the popular sha-256 to ensure users sensitive
          data remains safe. Now you might be thinking what does blockchain have to do with this?
          That will be discussed in the documentation below.
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
