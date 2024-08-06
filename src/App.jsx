import "./App.css";
import styled from "styled-components";
import Title from "./components/Title";
// import data from "./data/data.json";

function App() {
  return (
    <Main className="w-100 flex-col">
      <Title />
    </Main>
  );
}

export default App;

const Main = styled.div`
  background-color: #fff8f0;
  /* width: calc(100% - 15.6rem); */
  max-width: 64rem;
  min-width: 20rem;
  padding: 15.6vw 2rem;
  text-align: center;
  /* font-size: 2rem; */
  @media screen and (min-width: 640px) {
    padding-top: 10rem;
  }
`;
