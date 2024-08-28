import React from "react";
import styled from "styled-components";
import { flex } from "../utils/sMixinUtils";
import { getSize, getVwSize } from "../utils/sThemeUtils";

function Footer() {
  return (
    <SContainer>
      <SBtn $bgColor={"#fce777"} $fontColor={"black"}>
        카카오톡 공유하기
      </SBtn>
      <SBtn $bgColor={"black"} $fontColor={"white"}>
        청첩장 링크 복사하기
      </SBtn>
      <Stxt>ⓒweddingmoon</Stxt>
    </SContainer>
  );
}

export default Footer;

const SContainer = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  ${flex("column", "center", "center")};
  padding: ${getVwSize(40)};

  @media screen and (min-width: 640px) {
    padding: ${getSize(40)};
  }
`;

const SBtn = styled.button``;

const Stxt = styled.p``;
