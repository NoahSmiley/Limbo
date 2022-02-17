import {
  Card,
  Comment,
  Tooltip,
  Avatar,
  Divider,
  Form,
  Button,
  Input,
} from "antd";

import FullLayOut from "../../components/Base/FullLayOut";
import moment from "moment";
const Feed = () => {
  return (
    <FullLayOut
      style={{ textAlign: "center" }}
      titleone="Limbo"
      titletwo="Feed"
    >
      <Divider orientation="left"></Divider>
      <div style={{ overflowY: "scroll", height: "400px" }}>
        <Comment
          author={<p>@Noahsmiley</p>}
          content={
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
        <Divider orientation="left"></Divider>
        <Comment
          author={<p>@Noahsmiley</p>}
          content={
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
        <Divider orientation="left"></Divider>

        <Comment
          author={<p>@Noahsmiley</p>}
          content={
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
        <Divider orientation="left"></Divider>
        <Comment
          author={<p>@Noahsmiley</p>}
          content={
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
        <Divider orientation="left"></Divider>
        <Comment
          author={<p>@Noahsmiley</p>}
          content={
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
      </div>
      <Divider orientation="left"></Divider>

      <Form.Item>
        <Input.TextArea
          id="message"
          placeholder="Message"
          showCount
          rows={5}
          maxLength={256}
        />
      </Form.Item>
      <Form.Item>
        <span style={{ color: "lightgray" }}> Current Credits: 3</span>
        <br />
        <br />
        <Button type="primary" htmlType="submit" help="Current Credits: 3">
          Expend Credit (-1)
        </Button>
      </Form.Item>
      <Divider orientation="left"></Divider>
    </FullLayOut>
  );
};
export default Feed;
