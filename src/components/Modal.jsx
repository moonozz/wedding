import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import Close from "./icon/Close";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import { boxSize, position, xyValue, flex } from "../utils/sMixinUtils";

function Modal({ imgUrl, modal, setModal, setCurrentImg }) {
  const handleClose = () => {
    setModal(false);
    setCurrentImg("");
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <SModalCom $isOpen={modal}>
      <SModalContainer>
        <SBtnBox>
          <Button onClick={handleClose}>
            <Close width="24" height="24" stroke="black" strokeWidth="2" />
          </Button>
        </SBtnBox>
        <SContent>
          {imgUrl && (
            <SImg src={`${process.env.PUBLIC_URL}/assets/${imgUrl}`} />
          )}
        </SContent>
      </SModalContainer>
    </SModalCom>
  );
}

export default Modal;

const SModalCom = styled.div`
  ${boxSize("100vw", "100vh")};
  ${position("fixed")};
  z-index: 100;
  /* animation: fadeIn; */
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  ${xyValue("0", "0", "0", "0")};
  background-color: rgb(255, 255, 255, 0.3);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px); // safari에서 blur 안먹혀서 추가
`;

const SModalContainer = styled.div``;

const SBtnBox = styled.div`
  ${position("absolute")};
  ${xyValue("0", "0", "", "")};
  z-index: 101;
  margin: 2rem;
`;

const SContent = styled.div`
  ${boxSize("100%", "100%")};
`;

const SImg = styled.img`
  ${boxSize("90vw", "auto")};
  max-height: 70vh;
  object-fit: contain;
  pointer-events: none;
  overflow-clip-margin: content-box;
  overflow: clip;

  @media screen and (min-width: 640px) {
    ${boxSize("64rem", "auto")};
  }
`;
