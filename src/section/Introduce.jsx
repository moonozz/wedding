import React from "react";
import styled from "styled-components";
import data from "../data/data.json";
import Name from "../components/name/Name";
import Call from "../components/name/Call";
import ScrollImg from "../components/ScrollImg";
import SubTitle from "../components/SubTitle";
import HeartIcon from "../components/icon/Heart";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import { fontFamily, defaultTxtStyle } from "../utils/sMixinUtils";

function Introduce() {
  return (
    <Container>
      <SubTitle
        text={
          <HeartIcon
            stroke="#f32a2a"
            color="#f32a2a"
            width={40}
            height={"auto"}
          />
        }
      />
      <Name />
      {/* <ScrollImg imgUrl={data.img[7]} /> */}
      <Call />
    </Container>
  );
}

export default Introduce;

const Container = styled.section`
  padding: ${getVwSize(90)} 0;
  ${fontFamily("MaruBuri", "400")};
  @media screen and (min-width: 640px) {
    padding: ${getSize(90)} 0;
  }
`;

const SScriptDiv = styled.div`
  ${defaultTxtStyle("1.8", "24", "40")};
`;
