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
          The main motivation behind Mevo is to provide a place where people can meet and communicate 
          without being held to any societal standards by the moderators of the application.
          In doing this our application will not store data in a central location but, will use Google 
          Firebase to give all users with accounts their own personal blockchain with application data.
          On top of that all data will be encrypted using the popular sha-256 to ensure users sensitive
          data remains safe. Now you might be thinking what does blockchain have to do with this?
          That will be discussed in the documentation below.
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="How our Application Works"
        >
          This application is 
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Why Blockchains?"
        >
          Blockchains have recently become a buzz word with the rise of cryptocurrencies. 
          However, blockchains are not limited to cryptocurrencies they are simply a way of 
          storing data. We use blockchains as a way maintaining mutual power between all users.
          We found this a necessity to eleminate the posibility of rouge administrators, third
          party tampering, and other power heiarchys. Blockchain does this by being imumtable,
          meaning that data once on the blockchain cannot be alterd or deleted. Therefore, if 
          a user is to do any action that needs to be added to the blockchain such as making
          a post it cannot be erased.
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Future Functions"
        >
          This application is 
        </Card>
      </Card>
      ,
    </LayOut>
  );
};
export default Docs;
