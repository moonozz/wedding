import React from "react";
import styled from "styled-components";
import PhotoSwipe from "./version/PhotoSwipe";
import PhotoList from "./version/PhotoList";
import data from "../../data/data.json";
import SSubTitle from "../SSubTitle";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import { paddingIgnore, fontFamily, boxSize } from "../../utils/sMixinUtils";

function Photo({ modal, setModal }) {
  return (
    <Container>
      <SSubTitle text={"PHOTO"} />
      <PhotoList
        discript={"사진을 클릭해보세요."}
        modal={modal}
        setModal={setModal}
      />
    </Container>
  );
}

export default Photo;

const Container = styled.section`
  padding: ${getSize(30)} 0 ${getSize(90)};
  ${paddingIgnore};
  width: ${getVwSize(640)};

  @media screen and (min-width: 640px) {
    width: ${getSize(640)};
  }
`;
