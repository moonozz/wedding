import "./App.css";
import styled from "styled-components";
import Title from "./components/Title";
import Introduce from "./components/Introduce";
// import data from "./data/data.json";

function App() {
  return (
    <Main className="w-100 flex-col">
      <Title />
      <Introduce />
    </Main>
  );
}

export default App;

const Main = styled.div`
  /* background-color: #ffffff; */
  background-color: #f4f4f4;
  /* width: calc(100% - 15.6rem); */
  max-width: 64rem;
  min-width: 20rem;
  padding: 15.6vw 2rem 0;
  text-align: center;
  /* font-size: 2rem; */
  @media screen and (min-width: 640px) {
    padding: 10rem 2rem 0;
  }
`;
