import styled from "styled-components";

export default function Header() {
  return (
    <TitleWrapper>
      <TitleWrapperFirst>
        <H1>Notifications</H1>
        <Button>7</Button>
      </TitleWrapperFirst>
      <TitleParagraph>Mark all as read</TitleParagraph>
    </TitleWrapper>
  );
}

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
