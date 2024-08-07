import "./App.css";
import styled from "styled-components";
import Title from "./components/Title";
import Introduce from "./components/Introduce";
import EffectBtn from "./components/EffectBtn";
// import data from "./data/data.json";

function App() {
  return (
    <Main className="w-100 flex-col">
      <Title />
      <Introduce />
      <EffectBtn />
    </Main>
  );
}

export default App;

const Main = styled.div`
  background-color: #f4f4f4;
  max-width: 64rem;
  min-width: 20rem;
  padding: 15.6vw 2rem 0;
  text-align: center;
  @media screen and (min-width: 640px) {
    padding: 10rem 2rem 0;
  }
`;
