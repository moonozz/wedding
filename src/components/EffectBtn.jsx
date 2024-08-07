import React from "react";
import styled from "styled-components";

function EffectBtn() {
  return (
    <FixArea>
      <button>🎉</button>
      <button>❤️</button>
    </FixArea>
  );
}

export default EffectBtn;

const FixArea = styled.div`
  width: calc(100% - 4rem);
  display: flex;
  justify-content: space-between;
  font-size: 3.2rem;
  position: fixed;
  z-index: 10;
  bottom: 3.2vw;

  button {
    padding: 1.3rem 1.4rem 1.1rem;
    border-radius: 100%;
    border: none;
    background-color: rgb(26, 26, 26, 0.1);
    /* padding: 3.1vw 3.1vw 2.2vw; */
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    cursor: pointer;
  }

  @media screen and (min-width: 640px) {
    width: calc(64rem - 4rem);
    bottom: 2rem;
  }
`;
