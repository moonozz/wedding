import React from "react";
import styled from "styled-components";
import { getSize, getVwSize } from "../../../utils/sThemeUtils";
import { boxSize } from "../../../utils/sMixinUtils";

function photoList({ imgUrl }) {
  return (
    <BlockDiv>
      <p>{imgUrl}</p>
    </BlockDiv>
  );
}

export default photoList;

const BlockDiv = styled.div``;
