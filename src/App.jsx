import "./App.css";
import "./reset.css";
import styled from "styled-components";
import date from "./data.json";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Container>
        <NotificationWrapper>
          <Header />
          {date.map((item, index) => (
            <Notification key={index}>
              <img src={item.url} alt="avatar" />
              <ParagraphWrapper>
                <Paragraph>
                  <SpanName>{item.name}</SpanName> {item.title}{" "}
                  <SpanInfo>{item.event}</SpanInfo>
                  <Oval></Oval>
                </Paragraph>
                <SpanTime>{item.date}</SpanTime>
              </ParagraphWrapper>
            </Notification>
          ))}
        </NotificationWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 375px;
  padding: 24px 16px 29px;
  background-color: #fff;
`;
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
export default App;
