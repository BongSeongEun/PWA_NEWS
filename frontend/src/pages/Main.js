import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const QuadView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: peachpuff;
  height: 100vh;
`;

const MultiView = styled.div``;

const ContentButton = styled.button`
  width: 30vw;
  height: 18vh;
  border: 1px solid black;
  margin: 20px;
  border-radius: 15px;
  max-width: 180px;
`;

const Title = styled.text`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 4rem;
`;

const Copyright = styled.text`
  font-size: 1rem;
  font-weight: lighter;
  padding-top: 4rem;
`;

function Main() {
  return (
    <>
      <QuadView>
        <Title>이름 어떻게 할지 고민중</Title>
        <MultiView>
          <Link to="/news">
            <ContentButton>오늘의 뉴스</ContentButton>
          </Link>
          <ContentButton>기능 추가 예정...</ContentButton>
        </MultiView>
        <MultiView>
          <ContentButton>기능 추가 예정...</ContentButton>
          <ContentButton>기능 추가 예정...</ContentButton>
        </MultiView>
        <Copyright>@Copyright By SeongEun</Copyright>
      </QuadView>
    </>
  );
}

export default Main;
