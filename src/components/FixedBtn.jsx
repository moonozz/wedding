import React from "react";
import styled from "styled-components";
import JSConfetti from "js-confetti";
import { getSize } from "../\butils/sThemeUtils";
import { flex, position, xyValue } from "../\butils/sMixinUtils";

function EffectBtn() {
  const jsConfetti = new JSConfetti();

  const handleConfetti = (emoji) => {
    let emojisArray = [];

    if (emoji === "heart") {
      emojisArray = ["❤️", "🍀"];
    } else if (emoji === "party") {
      emojisArray = ["🎉", "😎"];
    }

    jsConfetti.addConfetti({
      emojis: emojisArray,
      emojiSize: 70,
      confettiNumber: 30,
    });
  };

  return (
    <SFixArea>
      <button onClick={() => handleConfetti("party")}>🎉</button>
      <button onClick={() => handleConfetti("heart")}>❤️</button>
    </SFixArea>
  );
}

export default EffectBtn;

const SFixArea = styled.div`
  width: calc(100% - 4rem);
  ${flex("", "", "space-between")}
  ${position("fixed")};
  ${xyValue("", "", "20", "")}
  font-size: ${getSize(32)};
  z-index: 10;

  button {
    padding: 1.3rem 1.4rem 1.3rem;
    border-radius: 100%;
    border: none;
    background-color: rgb(26, 26, 26, 0.1);
    backdrop-filter: blur(50px);
    cursor: pointer;
  }
  button:hover {
    background-color: rgb(26, 26, 26, 0.2);
  }

  @media screen and (min-width: 640px) {
    width: calc(64rem - 4rem);
    /* bottom: 7rem; */
  }
`;
