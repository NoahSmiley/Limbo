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
import './Feed.css'
import { useFormik } from "formik";
import * as Yup from "yup";

import FullLayOut from "../../components/Base/FullLayOut";
import moment from "moment";
import { navBarActions } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
const Feed = () => {
  const credits = useSelector((state)=>state.navbar.credits)
  const user = useSelector((state)=>state.navbar.userName)
  const formik = useFormik({
    initialValues: {
      message:""
    },
    onSubmit: (value) => {
      if (credits >0){
        const currentMessage = {author:user,text:value.message,time:new Date().toLocaleTimeString()}
        dispatch(navBarActions.addMessage(currentMessage))
        formik.setFieldValue("message", "")
        dispatch(navBarActions.subCredit())
        dispatch(navBarActions.creditTransaction())
        dispatch(navBarActions.messageTransaction(currentMessage))
      }
      else{
        alert("NOT ENOUGH CREDITS")
      }
    },
    validationSchema: Yup.object({
      message: Yup.string().required(),
    }),
  });
  
  const messages = useSelector((state)=>(state.navbar.messages))
  const dispatch = useDispatch()
  const commentList =[...messages].reverse().map((message) => {
    return (
      <div style={{textAlign:"left"}}>
        <Comment
          author={<p>@{message.author}</p>}
          content={<p>{message.text}</p>}
          datetime={
            <Tooltip title={message.time}>
              <span>{message.time}</span>
            </Tooltip>
          }
        />
        <Divider orientation="left"></Divider>
      </div>
    );
  });

  return (
    <FullLayOut
      style={{ textAlign: "left" }}
      titleone="Limbo"
      titletwo="Feed"
    >
      <Divider orientation="left"></Divider>
      <div style={{ overflowY: "scroll", height: "400px" ,flexDirection: "column-reverse"  }}>{commentList}</div>
    <Form onFinish={formik.handleSubmit}>
      <Form.Item>
        <Input.TextArea
          id="message"
          placeholder="Message"
          showCount
          rows={5}
          maxLength={256}
          onChange={formik.handleChange}
          value={formik.values.message}
        />
      </Form.Item>
      <Form.Item>
        <span style={{ color: "lightgray" }}> Current Credits: {credits}</span>
        <br />
        <br />
        <Button type="primary" htmlType="submit" help="Current Credits: 3">
          Expend Credit (-1)
        </Button>
      </Form.Item>
      </Form>
      <Divider orientation="left"></Divider>
    </FullLayOut>
  );
};
export default Feed;
