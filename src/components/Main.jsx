import styled from "styled-components";
import date from "../data.json";
import { useState } from "react";

export default function Main() {
  const [notifications, setNotifications] = useState(date);

  return (
    <NotificationWrapper>
      {notifications.map((item) => {
        return (
          <Notification key={item.id}>
            <img src={item.url} alt="avatar" />
            <ParagraphWrapper>
              <Wrapper>
                <div>
                  <Paragraph>
                    <SpanName>{item.name}</SpanName> {item.title}{" "}
                    <SpanInfo>{item.event}</SpanInfo>
                    <Oval></Oval>
                  </Paragraph>
                  <SpanTime>{item.date}</SpanTime>
                </div>

                {item.userImage ? (
                  <div>
                    <img src={item.userImage} alt="" />
                  </div>
                ) : null}
              </Wrapper>
              {item.message ? (
                <MessageBox index={item.id}>{item.message}</MessageBox>
              ) : null}
            </ParagraphWrapper>
          </Notification>
        );
      })}
    </NotificationWrapper>
  );
}
const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 24px;
`;
const Notification = styled.div`
  width: 343px;
  display: flex;
  gap: 13px;
  align-items: start;
  border-radius: 8px;
  background-color: #f7fafd;
  padding: 16px 26px 16px 16px;
  cursor: pointer;
`;
const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #5e6778;
  line-height: normal;
`;
const SpanName = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #1c202b;
  cursor: pointer;

  &:hover {
    color: #0a327b;
  }
`;
const SpanInfo = styled.span`
  font-size: 14px;
  color: #5e6778;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: #0a327b;
  }
`;
const Oval = styled.div`
  width: 8px;
  height: 8px;
  background-color: #f65552;
  border-radius: 50%;
  margin-left: 6px;
  display: inline-block;
`;
const SpanTime = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #939cad;
`;
const ParagraphWrapper = styled.div`
  display: flex;

  flex-direction: column;
  gap: 4px;
`;
const MessageBox = styled.div`
  width: 263px;
  padding: ${(props) => (props.index == 4 ? "24px 16px 29px" : "")};
  border: ${(props) => (props.index == 4 ? "1px solid #dde7ee" : "")};
  width: 231px;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: #5e6778;
`;
const Wrapper = styled.div`
  display: flex;
`;
