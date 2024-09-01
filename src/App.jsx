import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { getSize, getVwSize } from "./utils/sThemeUtils";
import { flex, boxSize, position } from "./\butils/sMixinUtils";

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

// const Main = styled.div`
//   ${position("relative")}
//   ${flex("column", "", "")}
//   background-color: #f4f4f4;
//   /* width: calc(100% - 2rem); */
//   ${boxSize("100vw", "")}
//   max-width: ${getSize(640)};
//   min-width: ${getSize(200)};
//   padding: ${getVwSize(80)} ${getSize(20)} 0;
//   text-align: center;

//   @media screen and (min-width: 640px) {
//     padding: ${getSize(80)} ${getSize(20)} 0;
//     ${boxSize("100%", "")}
//   }
// `;

const SContainer = styled.div``;

const SBtn = styled.button``;
