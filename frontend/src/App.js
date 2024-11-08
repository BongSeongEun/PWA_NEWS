import React from "react";
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
  margin-bottom: 2rem;
`;

function App() {
  return (
    <>
      <QuadView>
        <Title>이거보세요</Title>
        <MultiView>
          <ContentButton>11</ContentButton>
          <ContentButton>22</ContentButton>
        </MultiView>
        <MultiView>
          <ContentButton>33</ContentButton>
          <ContentButton>44</ContentButton>
        </MultiView>
      </QuadView>
    </>
  );
}

export default App;
