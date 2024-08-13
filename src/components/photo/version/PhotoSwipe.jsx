import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import data from "../../../data/data.json";
import { getSize, getVwSize } from "../../../utils/sThemeUtils";
import { boxSize, position, flex } from "../../../utils/sMixinUtils";

function PhotoSwipe({ imgUrl }) {
  const containerRef = useRef(null);
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
    <Container ref={containerRef}>
      <Inner
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        $transform={currentId}
        $trans={trans}
      >
        {imgData?.map((el) => {
          return (
            <ImgLi key={el}>
              <div>
                <Image
                  src={`${process.env.PUBLIC_URL}/assets/${el}`}
                  alt={el}
                />
                <p>{el}</p>
              </div>
            </ImgLi>
          );
        })}
      </Inner>
      {currentId + 1} / {imgData.length}
    </Container>
  );
}

export default PhotoSwipe;

const Container = styled.div`
  ${position("relative")};
  overflow-x: hidden;
  touch-action: pan-x;
  user-select: none;
  -webkit-user-drag: none;
  touch-action: auto;

  width: calc(100vw - 5rem);
  transform: translateX(5rem);

  @media screen and (min-width: 640px) {
    width: calc(64rem - 5rem);
  }
`;

const Inner = styled.ul`
  display: block;
  ${flex("row", "", "")};
  ${position("relative")};
  ${boxSize(`calc(${data.img.length - 1} * 80vw)`, "100%")};
  -webkit-box-orient: horizontal;
  transition-property: transform;
  transform: ${({ $transform }) => `translateX(-${$transform * 80}vw)`};
  transition: ${({ $trans }) => ($trans ? "transform 0.3s ease" : "none")};

  @media screen and (min-width: 640px) {
    transform: ${({ $transform }) => `translateX(-${$transform * 60}vw)`};
  }
`;

const ImgLi = styled.li`
  ${flex("row", "center", "center")};
  ${position("relative")};
  overflow: hidden;
  width: 80vw;
  height: 120vw;
  margin-right: 2rem;

  @media screen and (min-width: 640px) {
    width: 60rem;
  }
`;

const Image = styled.img`
  ${boxSize("100%", "auto")};
  object-fit: cover;
`;
