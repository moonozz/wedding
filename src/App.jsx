import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import Title from "./components/title/Title";
import Introduce from "./components/Introduce";
import FixedBtn from "./components/FixedBtn";
import Photo from "./components/photo/Photo";
import { getSize, getVwSize } from "./utils/sThemeUtils";
import { flex, boxSize, position } from "./\butils/sMixinUtils";
// import data from "./data/data.json";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <Main>
      <Title />
      <Introduce />
      <Photo modal={modal} setModal={setModal} />
      <FixedBtn />
    </Main>
  );
}

export default App;

const Main = styled.div`
  ${position("relative")}
  ${flex("column", "", "")}
  background-color: #f4f4f4;
  /* width: calc(100% - 2rem); */
  ${boxSize("100vw", "")}
  max-width: ${getSize(640)};
  min-width: ${getSize(200)};
  padding: ${getVwSize(80)} ${getSize(20)} 0;
  text-align: center;

  @media screen and (min-width: 640px) {
    padding: ${getSize(80)} ${getSize(20)} 0;
    ${boxSize("100%", "")}
  }
`;
