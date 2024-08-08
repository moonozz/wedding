import "./App.css";
import styled from "styled-components";
import Title from "./components/title/Title";
import Introduce from "./components/Introduce";
import FixedBtn from "./components/FixedBtn";
import Photo from "./components/Photo";
import { getSize, getVwSize } from "./utils/sThemeUtils";
// import data from "./data/data.json";

function App() {
  return (
    <Main className="flex-col">
      <Title />
      <Introduce />
      <Photo />
      <FixedBtn />
    </Main>
  );
}

export default App;

const Main = styled.div`
  background-color: #f4f4f4;
  /* width: calc(100% - 2rem); */
  width: 100vw;
  max-width: ${getSize(640)};
  min-width: ${getSize(200)};
  padding: ${getVwSize(150)} ${getSize(20)} 0;
  text-align: center;

  @media screen and (min-width: 640px) {
    padding: ${getSize(130)} ${getSize(20)} 0;
    width: 100%;
  }
`;
