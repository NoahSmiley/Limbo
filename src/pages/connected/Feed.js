import { Card, Comment, Tooltip, Avatar, Divider } from "antd";
import FullLayOut from "../../components/Base/FullLayOut";
import moment from "moment";
const Feed = () => {
  return (
    <FullLayOut style={{ textAlign: "center" }} titleone="Limbo" titletwo="Feed">
      <Divider orientation="left"></Divider>

      <Comment
        author={<a>@Noahsmiley</a>}

        content={
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
          </p>
        }
        datetime={
          <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
      <Divider orientation="left"></Divider>
    </FullLayOut>
  );
};
export default Feed;
