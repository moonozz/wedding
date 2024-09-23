import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import { boxSize, fontSize, xyValue } from "../utils/sMixinUtils";

function Toast({ text }) {
  const [isToast, setIsToast] = useState(false);
  const [isAnimation, setIsAnimation] = useState(false);

  useEffect(() => {
    setIsToast(!isToast);
    setIsAnimation(!isAnimation);

    // const slideOutTimer = setTimeout(() => {
    //   setIsToast(false);
    //   setTimeout(() => setIsAnimation(false), 1000);
    // }, 5000);

    // return () => clearTimeout(slideOutTimer);

    const slideOutTimer = setTimeout(() => {
      setIsAnimation(false);
    }, 4000);

    const removeToastTimer = setTimeout(() => {
      setIsToast(false);
    }, 5000);

    return () => {
      clearTimeout(slideOutTimer);
      clearTimeout(removeToastTimer);
    };
  }, []);

  return (
    <>
      {isToast ? (
        <SContainer $animation={isAnimation}>
          <STxt>{text}</STxt>
        </SContainer>
      ) : null}
    </>
  );
}

export default Toast;

const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
  }
  70% {
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateY(0%)
  }
  70% {
    opacity: 0.5;
  }
  100% {
    transform: translateY(-100%)
  }
`;

const SContainer = styled.div`
  ${boxSize("100vw", "auto")};
  padding: ${getVwSize(30)} ${getVwSize(40)} 0;
  z-index: 20;
  position: fixed;
  ${xyValue("0", "", "0", "")};
  animation: ${({ $animation }) => ($animation ? slideIn : slideOut)} 2s
    ease-in-out forwards;

  @media screen and (min-width: 640px) {
    ${boxSize("640px", "auto")};
    padding: ${getSize(30)} ${getSize(40)} 0;
  }
`;

const STxt = styled.p`
  ${fontSize(16)};
  background-color: rgb(0, 0, 0, 0.5);
  color: white;
  border-radius: 5rem;

  padding: ${getVwSize(20)} ${getVwSize(10)};
  @media screen and (min-width: 640px) {
    padding: ${getSize(20)} ${getSize(10)};
  }
`;
