import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import data from "../../../data/data.json";
import { getSize, getVwSize } from "../../../utils/sThemeUtils";
import {
  boxSize,
  position,
  flex,
  paddingIgnore,
} from "../../../utils/sMixinUtils";

function PhotoSwipe({ imgUrl }) {
  const containerRef = useRef(null);
  const imgData = data.img.slice(1);

  const [start, setStart] = useState(0);
  const [offset, setOffset] = useState(0); // 스와이프 하는 동안 이미지 따라오게
  const [cur, setCur] = useState(0);
  const [trans, setTrans] = useState("");
  const [transDuration, setTransDuration] = useState("");
  // const imgList = [imgData[imgData.length - 1], ...imgData, imgData[1]];

  const handleTouchStart = (e) => {
    // console.log(e);
    setStart(e.changedTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    // console.log(`Move시작 cur: ${cur}, offset:${offset}, start: ${start}`);
    setOffset(cur + e.changedTouches[0].clientX - start);
    setTrans(`translate3d(${offset}px, 0px, 0px)`);
    setTransDuration("0ms");
    // console.log(`Move끝 cur: ${cur}, offset:${offset}, start: ${start}`);
  };

  const handleTouchEnd = (e) => {
    // console.log(containerRef.current.clientWidth);
    console.log(`End시작 cur: ${cur}, offset:${offset}, start: ${start}`);

    const screenWidth = containerRef.current.clientWidth;
    const imgWidth = Math.floor(screenWidth * 0.805) - 20;

    const move = cur + (e.changedTouches[0].clientX - start);
    let end = Math.round(move / screenWidth) * screenWidth;
    console.log(end);

    setTrans(`translate3d(${end}px, 0px, 0px)`);
    setTransDuration("300ms");
    setCur(end);
    console.log(cur);

    setTimeout(() => {
      setTransDuration("0ms");
    }, 300);
    //64.477
  };

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      console.log(width);
      console.log(Math.floor(width * 0.805) - 20);
    }
    // console.log(screenWidth);
  }, []);

  return (
    <Container
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Inner $tansform={trans} $duration={transDuration}>
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
    </Container>
  );
}

export default PhotoSwipe;

const Container = styled.div`
  ${boxSize("", "120vw")};
  ${position("relative")};
  overflow-x: hidden;
  touch-action: pan-x;
  /* touch-action: auto; */
`;

const Inner = styled.ul`
  display: block;
  ${flex("row", "", "")};
  ${boxSize(`calc(${data.img.length - 1} * 80vw)`, "100%")};
  gap: 2rem;
  transition-property: transform;
  transform: ${({ $tansform }) => $tansform};
  transition-duration: ${({ $duration }) => $duration};
`;

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
