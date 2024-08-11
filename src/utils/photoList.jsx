import styled from "styled-components";
import data from "../data/data.json";
import { getSize, getVwSize } from "./sThemeUtils";
import { boxSize } from "./sMixinUtils";

export const PhotoLiSwipe = ({ imgUrl }) => {
  return (
    <ImgLi>
      <div>
        <Image
          src={`${process.env.PUBLIC_URL}/assets/${imgUrl}`}
          alt={imgUrl}
        />
        <p>{imgUrl}</p>
      </div>
    </ImgLi>
  );
};

export const PhotoLiBlock = ({ imgUrl }) => {
  return (
    <BlockDiv>
      <p>{imgUrl}</p>
    </BlockDiv>
  );
};

const ImgLi = styled.li`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 80vw;
  height: 100vw;
`;

const Image = styled.img`
  ${boxSize("100%", "")};
  /* object-fit: contain; */
  object-fit: cover;
  /* height: 100%; */
  /* position: absolute; */
`;

const BlockDiv = styled.div``;
