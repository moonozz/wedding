import "./App.css";
import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fontSize } from "./\butils/sMixinUtils";

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

const SContainer = styled.div``;

const SBtn = styled.button`
  ${fontSize("24")}
`;
