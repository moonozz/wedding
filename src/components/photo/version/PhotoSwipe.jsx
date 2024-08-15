import React, { useState } from "react";
import styled from "styled-components";
import data from "../../../data/data.json";
import { getSize, getVwSize } from "../../../utils/sThemeUtils";
import {
  boxSize,
  position,
  flex,
  fontFamily,
  xyValue,
  absoluteCenter,
} from "../../../utils/sMixinUtils";

function PhotoSwipe({ imgUrl, discript }) {
  // const containerRef = useRef(null);
  const imgData = data.img.slice(1);

  const [start, setStart] = useState(0);
  const [trans, setTrans] = useState(false);
  const [currentId, setCurrentId] = useState(0);

  const handleTouchStart = (e) => {
    setStart(e.changedTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (trans) return;

    const touchEnd = e.changedTouches[0].clientX;
    const offset = start - touchEnd;

    if (offset > 50 && currentId < imgData.length - 1) {
      setTrans(true);
      setCurrentId((prev) => prev + 1);
      setTimeout(() => setTrans(false), 300);
      // console.log(`offset>50 ${offset}`);
      // console.log(`currentId ${currentId}`);
    } else if (offset < -50 && currentId > 0) {
      setTrans(true);
      setCurrentId((prev) => prev - 1);
      setTimeout(() => setTrans(false), 300);
      // console.log(`offset<-50 ${offset}`);
      // console.log(`currentId ${currentId}`);
    }
  };

  return (
    <Container>
      <Discript>{discript}</Discript>

      <Inner
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        $transform={currentId}
        $trans={trans}
      >
        {imgData?.map((el) => {
          return (
            <ImgLi key={el}>
              <Image src={`${process.env.PUBLIC_URL}/assets/${el}`} alt={el} />
            </ImgLi>
          );
        })}
      </Inner>
      <Page>
        {currentId + 1} / {imgData.length}
      </Page>
    </Container>
  );
}

export default PhotoSwipe;

const Container = styled.div`
  ${boxSize("100%", "auto")};
  ${position("relative")};
  overflow-x: hidden;
  user-select: none;
  -webkit-user-drag: none;
  touch-action: auto;
  padding-left: 12vw; // 사진 가운데 배치용

  @media screen and (min-width: 640px) {
    padding-left: 4rem;
  }
`;

const Discript = styled.p`
  ${fontFamily("MaruBuri", "400")};
  font-size: ${getVwSize(24)};
  margin: ${getVwSize(40)} 0;
  padding-right: 12vw; // 사진 가운데 배치용

  @media screen and (min-width: 640px) {
    font-size: ${getSize(24)};
    margin: ${getSize(40)} 0;
    padding-right: 4rem;
  }
`;

const Inner = styled.ul`
  display: block;
  ${flex("row", "", "")};
  ${position("relative")};
  ${boxSize(`calc(${data.img.length - 1} * 80vw)`, "100%")};
  /* -webkit-box-orient: horizontal; */
  /* transition-property: transform; */
  transform: ${({ $transform }) => `translateX(-${$transform * 80}vw)`};
  transition: ${({ $trans }) => ($trans ? "transform 0.3s ease" : "none")};

  @media screen and (min-width: 640px) {
    transform: ${({ $transform }) => `translateX(-${$transform * 58}rem)`};
  }
`;

const ImgLi = styled.li`
  ${flex("row", "center", "center")};
  ${position("relative")};
  overflow: hidden;
  width: 80vw;
  height: 100vw;
  margin-right: 2rem;

  @media screen and (min-width: 640px) {
    width: 56rem;
  }
`;

const Image = styled.img`
  ${boxSize("100%", "auto")};
  object-fit: cover;
`;

const Page = styled.p`
  ${fontFamily("MaruBuri", "400")};
  font-size: ${getVwSize(20)};
  padding: ${getVwSize(40)} 12vw 0 0;

  @media screen and (min-width: 640px) {
    font-size: ${getSize(20)};
    padding: ${getSize(40)} ${getSize(40)} 0 0;
  }
`;
