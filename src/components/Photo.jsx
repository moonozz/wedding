import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PhotoLiSwipe } from "../utils/photoList";
import data from "../data/data.json";
import SSubTitle from "./SSubTitle";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import {
  boxSize,
  position,
  flex,
  secTitle,
  fontFamily,
} from "../\butils/sMixinUtils";

function Photo() {
  const imgData = data.img.slice(1);

  return (
    <SContainer>
      <SSubTitle text={"PHOTO"} />
      <SWrapper>
        <SInner>
          {imgData?.map((el) => {
            return <PhotoLiSwipe key={el} imgUrl={el} />;
          })}
        </SInner>
      </SWrapper>
    </SContainer>
  );
}

export default Photo;

const SContainer = styled.section`
  padding: ${getSize(100)} 0;
`;

const SWrapper = styled.div`
  ${boxSize("", "120vw")};
  ${position("relative")};
  overflow: hidden;
  touch-action: pan-x;
`;

const SInner = styled.ul`
  ${boxSize(`calc(${data.img.length - 1} * 80vw)`, "100%")};
  ${flex("row", "", "")};
  /* width: 100%; */
  overflow: hidden;
  /* transition-property: transform; */
  gap: 2rem;
`;
