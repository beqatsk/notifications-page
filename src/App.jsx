import "./App.css";
import "./reset.css";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  return (
    <>
      <Container>
        <Header />
        <Main />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 375px;
  padding: 24px 16px 29px;
  background-color: #fff;
`;

export default App;
