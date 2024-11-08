import React from "react";
import styled from "styled-components";

const QuadView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

const MultiView = styled.div``;

const ContentButton = styled.button`
  width: 10vw;
  height: auto;
  border: 1px solid black;
  margin: 15px;
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
