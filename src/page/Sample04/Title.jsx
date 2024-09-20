import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import { getDate, getWeek, getTime, getDday } from "../../utils/filter";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import {
  position,
  boxSize,
  fontSize,
  flex,
  dim,
  xyValue,
} from "../../utils/sMixinUtils";

function Title({ font }) {
  const contentRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [playBar, setPlayBar] = useState("0");

  const imgUrl = `${process.env.PUBLIC_URL}/assets/${data.img[1]}`;

  const handlePlayBar = () => {
    if (getDday() <= 0) {
      setPlayBar("100");
      // console.log("getDday 0보다 작음", playBar);
    } else if (getDday() > 0) {
      const playWidth = (width / 500) * getDday();
      const widthPer = (parseFloat(playWidth) / width) * 100;
      setPlayBar(widthPer);
      // console.log("getDday 0보다 큼", widthPer);
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      setWidth(contentRef.current.offsetWidth);
      handlePlayBar();
    }
  }, [contentRef.current, playBar]);

  return (
    <SContainer>
      <SBg $imgUrl={imgUrl} />
      <SContent>
        <STitle>Our wedding</STitle>
        <SAlbum src={imgUrl} />
        <STxt>
          <p>
            {getDate("eng", 4)} {getWeek(data.when, "kor")} {getTime("eng")}
          </p>
          <p>invite you, celebrate our wedding</p>
          <p>Park Bo Gum, Su Ji</p>
        </STxt>
        <SPlayBarGroup>
          <span>D - {getDday()}</span>
          <SPlayBar ref={contentRef}>
            <SBarBack />
            <SBar $playBar={playBar} />
          </SPlayBar>
          <span>{getDate("eng", 2)}</span>
        </SPlayBarGroup>
        <SBtnArea>
          <></>
        </SBtnArea>
      </SContent>
    </SContainer>
  );
}

export default Title;

const SContainer = styled.section`
  background-color: #fff;
  ${position("relative")};
  height: 100%;
`;

const SBg = styled.div`
  ${position("absolute")};
  /* z-index: 0; */
  ${boxSize("100vw", "100%")};

  max-height: 1000px;
  background-image: url(${({ $imgUrl }) => `${$imgUrl}`}););
  background-position: center center;
  background-size: cover;
  &::after {
    backdrop-filter: blur(${({ theme }) => getSize(20)({ theme })});
    -webkit-backdrop-filter: blur(${({ theme }) => getSize(20)({ theme })});
    ${dim};
  }

  @media screen and (min-width: 640px) {
    width: 640px;
  }
`;

const SContent = styled.div`
  ${position("relative")};
  padding: ${getVwSize(90)} ${getVwSize(50)};

  @media screen and (min-width: 640px) {
    padding: ${getSize(90)} ${getSize(50)};
  }
`;

const STitle = styled.p`
  ${fontSize(26)};
  color: white;
  font-weight: 800;
`;

const SAlbum = styled.img`
  width: ${getVwSize(350)};
  height: ${getVwSize(400)};
  object-fit: cover;
  margin: ${getVwSize(70)} 0 ${getVwSize(50)};

  @media screen and (min-width: 640px) {
    width: ${getSize(350)};
    height: ${getSize(400)};
    margin: ${getSize(70)} 0 ${getSize(50)};
  }
`;

const STxt = styled.div`
  p {
    ${fontSize(20)};
    font-weight: 400;
    color: white;
    opacity: 60%;
    margin-bottom: ${getVwSize(4)};
  }
  p:nth-child(2) {
    opacity: 100;
    font-weight: 600;
  }

  @media screen and (min-width: 640px) {
    p {
      margin-bottom: ${getSize(4)};
    }
  }
`;

const SPlayBarGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr 1fr;
  align-items: center;
  gap: ${getVwSize(20)};
  margin: ${getVwSize(60)} 0 ${getVwSize(50)};

  span {
    color: white;
    ${fontSize(20)};
  }

  @media screen and (min-width: 640px) {
    gap: ${getSize(20)};
    margin: ${getSize(60)} 0 ${getSize(50)};
  }
`;

const SPlayBar = styled.div`
  ${position("relative")};
  width: 100%;
  height: 1.56vw;

  @media screen and (min-width: 640px) {
    height: 1rem;
  }
`;

const SBarBack = styled.span`
  display: block;
  ${boxSize("100%", "100%")};
  background-color: white;
  border-radius: 1rem;
  opacity: 25%;
`;

const SBar = styled.span`
  ${position("absolute")};
  display: block;
  z-index: 10;
  width: ${({ $playBar }) => `${$playBar}%`};
  height: 100%;
  border-radius: 1rem;
  background-color: white;
  ${xyValue("0", "", "", "0")};
`;

const SBtnArea = styled.div`
  ${flex("row", "", "")};
`;
