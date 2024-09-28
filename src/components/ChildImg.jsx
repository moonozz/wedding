import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import { boxSize, position, xyValue } from "../utils/sMixinUtils";

function ChildImg({ bgColor }) {
  const heartImg = ["01", "02", "03", "04", "05", "06", "07", "08"];

  // useEffect(() => {
  //   heartImg.map((el) => {
  //     console.log(`${process.env.PUBLIC_URL}/assets/heart-${el}.png`);
  //   });
  // }, []);

  return (
    <SContainer $bgColor={bgColor.bg}>
      <SBgPaper />
      <SHeartGroup>
        {/* {heartImg.map((el) => {
          <img
            src={`${process.env.PUBLIC_URL}/assets/heart-${el}.png`}
            alt={"하트 이미지"}
          />;
        })} */}
        <img
          src={`${process.env.PUBLIC_URL}/assets/heart-01.png`}
          alt={"하트 이미지"}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/heart-02.png`}
          alt={"하트 이미지"}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/heart-03.png`}
          alt={"하트 이미지"}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/heart-04.png`}
          alt={"하트 이미지"}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/heart-05.png`}
          alt={"하트 이미지"}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/heart-06.png`}
          alt={"하트 이미지"}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/heart-07.png`}
          alt={"하트 이미지"}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/heart-08.png`}
          alt={"하트 이미지"}
        />
      </SHeartGroup>
      <SChildImg
        src={`${process.env.PUBLIC_URL}/assets/imgChild.png`}
        alt={"신랑, 신부 어릴때 사진"}
      />
    </SContainer>
  );
}

export default ChildImg;

const SContainer = styled.section`
  ${position("relative")};
  width: 100%;
  height: ${getVwSize(400)};
  background-color: ${({ $bgColor }) => $bgColor};
  padding: ${getVwSize(90)} ${getVwSize(50)} ${getVwSize(40)};

  @media screen and (min-width: 640px) {
    width: ${getSize(640)};
    height: ${getSize(400)};
    padding: ${getSize(90)} ${getSize(50)} ${getSize(40)};
  }
`;

const SBgPaper = styled.div`
  ${position("absolute")};
  ${xyValue("0", "0", "", "")};

  ${boxSize("100%", "100%")};
  mix-blend-mode: multiply;
  background-image: url(${process.env.PUBLIC_RUL}/assets/paperImg.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const heartAniRight = keyframes`
  0%{
    transform: scale(1.3);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.3);
  }
`;

const heartAniLeft = keyframes`
  0%{
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const SHeartGroup = styled.div`
  /* ${boxSize("100%", "100%")}; */
  width: calc(100% - ${getVwSize(100)});
  height: calc(100% - ${getVwSize(130)});
  ${position("absolute")};

  img {
    ${position("absolute")};
  }

  img:nth-child(odd) {
    animation: ${heartAniRight} 1.2s linear infinite;
  }

  img:nth-child(even) {
    animation: ${heartAniLeft} 1.2s linear infinite;
  }

  img:nth-child(1) {
    width: ${getVwSize(40)};
    height: auto;
    top: 0;
    left: ${getVwSize(80)};
  }
  img:nth-child(2) {
    width: ${getVwSize(56)};
    height: auto;
    top: ${getVwSize(20)};
    left: ${getVwSize(250)};
  }
  img:nth-child(3) {
    width: ${getVwSize(40)};
    height: auto;
    bottom: ${getVwSize(280)};
    right: ${getVwSize(130)};
  }
  img:nth-child(4) {
    width: ${getVwSize(40)};
    height: auto;
    top: ${getVwSize(60)};
    right: ${getVwSize(20)};
  }
  img:nth-child(5) {
    width: ${getVwSize(40)};
    height: auto;
    bottom: ${getVwSize(100)};
    left: ${getVwSize(10)};
  }
  img:nth-child(6) {
    width: ${getVwSize(50)};
    height: auto;
    bottom: ${getVwSize(80)};
    right: ${getVwSize(280)};
  }
  img:nth-child(7) {
    width: ${getVwSize(40)};
    height: auto;
    bottom: ${getVwSize(32)};
    right: ${getVwSize(90)};
  }
  img:nth-child(8) {
    width: ${getVwSize(36)};
    height: auto;
    top: ${getVwSize(240)};
    right: ${getVwSize(210)};
  }

  @media screen and (min-width: 640px) {
    width: calc(100% - ${getSize(100)});
    height: calc(100% - ${getSize(130)});

    img:nth-child(1) {
      width: ${getSize(40)};
      left: ${getSize(80)};
    }
    img:nth-child(2) {
      width: ${getSize(56)};
      top: ${getSize(20)};
      left: ${getSize(250)};
    }
    img:nth-child(3) {
      width: ${getSize(40)};
      bottom: ${getSize(280)};
      right: ${getSize(130)};
    }
    img:nth-child(4) {
      width: ${getSize(40)};
      top: ${getSize(60)};
      right: ${getSize(20)};
    }
    img:nth-child(5) {
      width: ${getSize(40)};
      bottom: ${getSize(100)};
      left: ${getSize(10)};
    }
    img:nth-child(6) {
      width: ${getSize(50)};
      bottom: ${getSize(80)};
      right: ${getSize(280)};
    }
    img:nth-child(7) {
      width: ${getSize(40)};
      bottom: ${getSize(32)};
      right: ${getSize(90)};
    }
    img:nth-child(8) {
      width: ${getSize(36)};
      top: ${getSize(240)};
      right: ${getSize(210)};
    }
  }
`;

const SChildImg = styled.img`
  /* ${position("absolute")}; */
  /* ${xyValue("90", "70", "", "")}; */
  width: ${getVwSize(500)};
  height: auto;

  @media screen and (min-width: 640px) {
    width: ${getSize(500)};
  }
`;
