import React from "react";
import styled from "styled-components";

const TitleText = styled.text`
  font-weight: bold;
  font-size: 2rem;
  padding-top: 2rem;
`;
const MainView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-color: peachpuff;
  height: 100vh;
`;

function News() {
  return (
    <>
      <MainView>
        <TitleText>오늘의 뉴스</TitleText>
      </MainView>
    </>
  );
}
export default News;
