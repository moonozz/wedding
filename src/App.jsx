import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { getSize, getVwSize } from "./utils/sThemeUtils";
import { flex, boxSize, fontSize } from "./\butils/sMixinUtils";

function App() {
  useEffect(() => {
    document.oncontextmenu = function () {
      return false;
    };
  }, []);

  return (
    <SContainer>
      <SBtn>
        <Link to="/sample01">샘플01 보러가기</Link>
      </SBtn>
    </SContainer>
  );
}

export default App;

const SContainer = styled.div`
  padding: 0 ${getSize(20)} 0;

  @media screen and (min-width: 640px) {
    padding: 0 ${getSize(20)} 0;
  }
`;

const SBtn = styled.button`
  ${fontSize("24")}
`;
