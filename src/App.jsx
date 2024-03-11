import "./App.css";
import "./reset.css";
import styled from "styled-components";
import ProfileImg from "/images/profileImage1.png";
function App() {
  return (
    <>
      <Container>
        <TitleWrapper>
          <TitleWrapperFirst>
            <H1>Notifications</H1>
            <Button>3</Button>
          </TitleWrapperFirst>
          <TitleParagraph>Mark all as read</TitleParagraph>
        </TitleWrapper>
        <NotificationWrapper>
          <Notification>
            <img src={ProfileImg} alt="avatar" />
            <ParagraphWrapper>
              <Paragraph>
                <SpanName> Mark Webber</SpanName> reacted to your recent post{" "}
                <SpanInfo>My first tournament today!</SpanInfo>
                <Oval></Oval>
              </Paragraph>
              <SpanTime>1m ago</SpanTime>
            </ParagraphWrapper>
          </Notification>
          <Notification>
            <img src={ProfileImg} alt="avatar" />
            <Paragraph>
              <SpanName> Mark Webber</SpanName> reacted to your recent post{" "}
              <SpanInfo>My first tournament today!</SpanInfo>
              <Oval></Oval>
            </Paragraph>
          </Notification>
        </NotificationWrapper>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 375px;
  padding: 24px 16px 29px;
  background-color: #f3f1f1;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TitleWrapperFirst = styled.div`
  display: flex;
  justify-content: center;
  gap: 9px;
`;
const H1 = styled.h1`
  font-size: 20px;
  color: #1c202b;
  font-weight: 700;
`;
const Button = styled.button`
  width: 32px;
  height: 25px;
  border-radius: 6px;
  background-color: #0a327b;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`;
const TitleParagraph = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #5e6778;
  cursor: pointer;

  &:hover {
    color: #0a327b;
  }
`;
const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 24px;
`;
const Notification = styled.div`
  width: 343px;
  height: 89px;
  display: flex;
  gap: 13px;
  align-items: center;
  border-radius: 8px;
  background-color: #f7fafd;
  padding: 16px 26px 16px 16px;
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
const SpanTime = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #939cad;
`;
const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export default App;
