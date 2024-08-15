import React from "react";
import styled from "styled-components";
import PhotoSwipe from "./version/PhotoSwipe";
import PhotoList from "./version/PhotoList";
import data from "../../data/data.json";
import SSubTitle from "../SSubTitle";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import { paddingIgnore, fontFamily } from "../../utils/sMixinUtils";

function Photo() {
  return (
    <Container>
      <SSubTitle text={"PHOTO"} />
      {/* <Discript>사진을 좌우로 밀어보세요.</Discript> */}
      {/* <PhotoSwipe discript={"사진을 좌우로 밀어보세요."} /> */}
      <PhotoList discript={"사진을 클릭해보세요."} />
    </Container>
  );
}

export default Photo;

const Container = styled.section`
  padding: ${getSize(30)} 0;
  ${paddingIgnore};
  width: ${getVwSize(640)};

  @media screen and (min-width: 640px) {
    width: ${getSize(640)};
  }
`;
