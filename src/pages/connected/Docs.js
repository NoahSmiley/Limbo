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
          Our application is based on using a blockchain to store data. To store new data on a blockchain
          we need to go through a process called mining. To make this process happen we need to verify 
          data prior to adding or minting to the blockchain. In order to ensure this gets done quickly 
          we enlist help form the users via the node desktop application. This is the application needed
          for users to create their accounts and add to their list of post credits. These two things are 
          simply an incentive for users to help us provide decentralization and security.
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Why Blockchains?"
        >
          Blockchains have recently become a buzz word with the rise of cryptocurrencies. 
          However, blockchains are not limited to cryptocurrencies they are simply a way of 
          storing data. We use blockchains as a way maintaining mutual power between all users.
          We found this a necessity to eliminate the possibility of rouge administrators, third
          party tampering, and other power hierarchies. Blockchain does this by being immutable,
          meaning that data once on the blockchain cannot be altered or deleted. Therefore, if 
          a user is to do any action that needs to be added to the blockchain such as making
          a post it cannot be erased.
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Future Functions"
        >
          This application is currently very similar to other social medias. However, there is 
          plenty of room for new functions that will allow our users to further connect with
          one another and enjoy themselves while using Mevo. A future quality of life function
          our team would enjoy adding is a voting system so posts can be regulated by the community 
          itself. This voting functionality would likely have to overwrite the data already on the 
          blockchain as blockchains are immutable (the data can't be deleted). Another function we 
          could eventually provide is private communities or group messaging. This would allow for 
          users to communicate within groups like how Discord provides messaging within channels.
          
        </Card>
      </Card>
      ,
    </LayOut>
  );
};
export default Docs;
