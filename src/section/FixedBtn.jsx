import React from "react";
import styled from "styled-components";
import JSConfetti from "js-confetti";
import { getSize } from "../\butils/sThemeUtils";
import { flex, position, xyValue } from "../\butils/sMixinUtils";
import Button from "../components/Button";

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
      <Button onClick={() => handleConfetti("party")}>🎉</Button>
      <Button onClick={() => handleConfetti("heart")}>❤️</Button>
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

  @media screen and (min-width: 640px) {
    width: calc(64rem - 4rem);
  }
`;
