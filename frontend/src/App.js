import React from "react";
import styled from "styled-components";

const QuadView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MultiView = styled.div``;

const ContentButton = styled.button`
  width: 25vw;
  height: 25vh;
  border: 1px solid black;
  margin: 50px;
`;

function App() {
  return (
    <>
      <QuadView>
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
