import React from "react";
import styled from "styled-components";
import JSConfetti from "js-confetti";
import { getSize } from "../\butils/sThemeUtils";
import { boxSize, flex, position, xyValue } from "../\butils/sMixinUtils";
import Button from "../components/Button";

function EffectBtn({ emojiArr }) {
  const jsConfetti = new JSConfetti();

  const handleConfetti = (emoji) => {
    let emojisArray = [];

    if (emoji === "heart") {
      emojisArray = emojiArr[1];
    } else if (emoji === "party") {
      emojisArray = emojiArr[2];
    }

    jsConfetti.addConfetti({
      emojis: emojisArray,
      emojiSize: 70,
      confettiNumber: 30,
    });
  };

  return (
    <SFixArea>
      <Button onClick={() => handleConfetti("party")}>{emojiArr[0][0]}</Button>
      <Button onClick={() => handleConfetti("heart")}>{emojiArr[0][1]}</Button>
    </SFixArea>
  );
}

export default EffectBtn;

const SFixArea = styled.div`
  padding: 0 ${getSize(20)};
  ${boxSize("100%", "auto")};
  ${flex("", "", "space-between")}
  ${position("fixed")};
  ${xyValue("", "", "20", "")}
  font-size: ${getSize(32)};
  z-index: 10;

  @media screen and (min-width: 640px) {
    ${boxSize("640px", "auto")};
  }
`;
