import React, { useState } from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import { boxSize, position, flex, fontSize } from "../../utils/sMixinUtils";

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
      // 아래 페이지 표기가 이미지갯수보다 넘지 않게 하기 (예: 15/14)
      setTrans(true);
      setCurrentId((prev) => prev + 1);
      setTimeout(() => setTrans(false), 300);
    } else if (offset < -50 && currentId > 0) {
      // 아래 페이지 표기가 1 아래로 표기되지 않게 하기(예:0/14)
      setTrans(true);
      setCurrentId((prev) => prev - 1);
      setTimeout(() => setTrans(false), 300);
    }
  };

  return (
    <SContainer>
      <SDiscript>{discript}</SDiscript>

      <SInner
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        $transform={currentId}
        $trans={trans}
      >
        {imgData?.map((el) => {
          return (
            <SImgLi key={el}>
              <SImage src={`${process.env.PUBLIC_URL}/assets/${el}`} alt={el} />
            </SImgLi>
          );
        })}
      </SInner>
      <SPage>
        {currentId + 1} / {imgData.length}
      </SPage>
    </SContainer>
  );
}

export default PhotoSwipe;

const SContainer = styled.div`
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

const SDiscript = styled.p`
  ${fontSize("24")}
  margin: ${getVwSize(40)} 0;
  padding-right: 12vw; // 사진 가운데 배치용

  @media screen and (min-width: 640px) {
    margin: ${getSize(40)} 0;
    padding-right: 4rem;
  }
`;

const SInner = styled.ul`
  display: block;
  ${flex("row", "", "")};
  ${position("relative")};
  ${boxSize(`calc(${data.img.length - 1} * 80vw)`, "100%")};
  /* -webkit-box-orient: horizontal; */
  /* transition-property: transform; */
  transform: ${({ $transform }) =>
    `translateX(-${
      $transform * 80
    }vw)`}; //만약 이미지 사이즈만큼하게 하려면 state를 추가해서 그걸 80에 대입해야할 것 같음
  transition: ${({ $trans }) => ($trans ? "transform 0.3s ease" : "none")};

  @media screen and (min-width: 640px) {
    transform: ${({ $transform }) => `translateX(-${$transform * 58}rem)`};
  }
`;

const SImgLi = styled.li`
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

const SImage = styled.img`
  ${boxSize("100%", "auto")};
  object-fit: cover;
`;

const SPage = styled.p`
  ${fontSize("20")}

  padding: ${getVwSize(40)} 12vw 0 0;

  @media screen and (min-width: 640px) {
    padding: ${getSize(40)} ${getSize(40)} 0 0;
  }
`;
