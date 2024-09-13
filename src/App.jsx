import "./App.css";
import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getSize } from "./utils/sThemeUtils";
import { fontSize, flex } from "./\butils/sMixinUtils";

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
        <Link to="/sample02">샘플02 보러가기</Link>
      </SBtn>
    </SContainer>
  );
}

export default App;

const SContainer = styled.div`
  padding: ${getSize(20)};
`;

const SBtn = styled.button`
  ${flex("column", "", "")};
  ${fontSize("24")};
  gap: ${getSize(20)};
`;
