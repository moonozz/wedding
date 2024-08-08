import React from "react";
import styled from "styled-components";
import { getSize } from "../\butils/sThemeUtils";
import { flex, position, trbl } from "../\butils/sMixinUtils";

function EffectBtn() {
  return (
    <SFixArea>
      <button>🎉</button>
      <button>❤️</button>
    </SFixArea>
  );
}

export default EffectBtn;

const SFixArea = styled.div`
  width: calc(100% - 4rem);
  ${flex("", "", "space-between")}
  ${position("fixed")};
  ${trbl("", "", "20", "")}
  font-size: ${getSize(32)};
  z-index: 10;
  /* bottom: 13.2vw; */

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
    /* bottom: 7rem; */
  }
`;
