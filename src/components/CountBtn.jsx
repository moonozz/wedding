import styled from "styled-components";
import { confetti } from "../App";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import { boxSize, flex } from "../utils/sMixinUtils";
import HeartIcon from "../components/icon/Heart";

function CountBtn({ emojiArr, count, setCount }) {
  const handleConfetti = () => {
    confetti.addConfetti({
      emojis: emojiArr,
      emojiSize: 80,
      confettiNumber: 40,
    });

    setCount((prev) => prev + 1);
  };

  return (
    <SFixArea>
      <SBtn onClick={handleConfetti}>
        <HeartIcon stroke="#EF4D5F" color="none" width={40} height={"auto"} />
        <p>{count}</p>
      </SBtn>
    </SFixArea>
  );
}

export default CountBtn;

const SFixArea = styled.div`
  background-color: #fff;
  margin-top: ${getVwSize(50)};
  ${boxSize("100%", "auto")};
  p {
    color: #ef4d5f;
    font-size: ${getVwSize(20)};
  }

  @media screen and (min-width: 640px) {
    ${boxSize("640px", "auto")};
    margin-top: ${getSize(50)};
    p {
      font-size: ${getSize(20)};
    }
  }
`;

const SBtn = styled.button`
  width: ${getVwSize(120)};
  height: ${getVwSize(120)};
  border-radius: 100%;
  border: none;
  background-color: #ffeced;

  cursor: pointer;

  &:hover {
    background-color: #fdd8da;

    svg {
      fill: #ef4d5f;
    }
  }

  @media screen and (min-width: 640px) {
    width: ${getSize(120)};
    height: ${getSize(120)};
  }
`;
