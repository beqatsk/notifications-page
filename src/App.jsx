import "./App.css";
import "./reset.css";
import styled from "styled-components";
function App() {
  return (
    <>
      <Container>
        <TitleWrapper>
          <TitleWrapperFirst>
            <H1>Notifications</H1>
            <Button>3</Button>
          </TitleWrapperFirst>
          <Title>Mark all as read</Title>
        </TitleWrapper>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 375px;
  padding: 24px 16px 29px;
  background-color: #f3f1f1;
  border: 1px solid red;
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
const Title = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #5e6778;
  cursor: pointer;

  &:hover {
    color: #062e76;
  }
`;

export default App;
