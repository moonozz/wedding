import React from "react";
import styled from "styled-components";
import PhotoSwipe from "./version/PhotoSwipe";
import data from "../../data/data.json";
import SSubTitle from "../SSubTitle";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import { paddingIgnore, fontFamily } from "../../utils/sMixinUtils";

function Photo() {
  return (
    <Container>
      <SSubTitle text={"PHOTO"} />
      <Discript>사진을 좌우로 밀어보세요.</Discript>
      <PhotoSwipe />
    </Container>
  );
}

export default Photo;

const Container = styled.section`
  padding: ${getSize(100)} 0;
  ${paddingIgnore};
  width: ${getVwSize(640)};

  @media screen and (min-width: 640px) {
    width: ${getSize(640)};
  }
`;

const Discript = styled.p`
  ${fontFamily("MaruBuri", "400")};
  font-size: ${getVwSize(24)};
  margin: ${getVwSize(40)} 0;

  @media screen and (min-width: 640px) {
    font-size: ${getSize(24)};
    margin: ${getSize(40)} 0;
  }
`;
