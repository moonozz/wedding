import React from "react";
import styled from "styled-components";
import data from "../data/data.json";
import PhotoSwipe from "../components/photo/PhotoSwipe";
import PhotoList from "../components/photo/PhotoList";
import SubTitle from "../components/SubTitle";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import { paddingIgnore, fontFamily, boxSize } from "../utils/sMixinUtils";

function Photo({ modal, setModal }) {
  return (
    <SContainer>
      <SubTitle text={"PHOTO"} />
      <PhotoSwipe discript={"사진을 넘겨보세요."} />
      {/* <PhotoList
        discript={"사진을 클릭해보세요."}
        modal={modal}
        setModal={setModal}
      /> */}
    </SContainer>
  );
}

export default Photo;

const SContainer = styled.section`
  padding: ${getSize(30)} 0 ${getSize(90)};
  ${paddingIgnore};
  width: ${getVwSize(640)};

  @media screen and (min-width: 640px) {
    width: ${getSize(640)};
  }
`;
