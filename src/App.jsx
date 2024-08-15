import "./App.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Title from "./section/Title";
import Introduce from "./section/Introduce";
import FixedBtn from "./section/FixedBtn";
import Photo from "./section/Photo";
import OurDay from "./section/OurDay";
import { getSize, getVwSize } from "./utils/sThemeUtils";
import { flex, boxSize, position } from "./\butils/sMixinUtils";
// import data from "./data/data.json";

function App() {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    document.oncontextmenu = function () {
      return false;
    };
  }, []);

  return (
    <Main>
      <Title />
      <Introduce />
      <Photo modal={modal} setModal={setModal} />
      <OurDay />
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
