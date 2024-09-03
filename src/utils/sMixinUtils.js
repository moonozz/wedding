import { css, keyframes } from "styled-components";
import { getSize, getVwSize } from "./sThemeUtils";

export const boxSize = (width = "100%", height = "100%") => css`
  width: ${width};
  height: ${height};
`;

export const position = (position = "relative") => css`
  position: ${position};
`;

// export const fontFamily = (family = "Aoboshi One", weight = "400") => css`
//   font-family: ${family}, sans-serif;
//   font-style: normal;
//   font-weight: ${weight};
//   //"Aoboshi One", "Abril Fatface", "MaruBuri",
// `;

export const fontSize = (size = "20") => css`
  font-size: ${getVwSize(`${size}`)};

  @media screen and (min-width: 640px) {
    font-size: ${getSize(`${size}`)};
  }
`;

export const flex = (
  direction = "row",
  align = "center",
  justify = "center"
) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
`;

export const xyValue = (
  top = "0",
  right = "0",
  bottom = "0",
  left = "0"
) => css`
  top: ${getVwSize(`${top}`)};
  right: ${getVwSize(`${right}`)};
  bottom: ${getVwSize(`${bottom}`)};
  left: ${getVwSize(`${left}`)};

  @media screen and (min-width: 640px) {
    top: ${getSize(`${top}`)};
    right: ${getSize(`${right}`)};
    bottom: ${getSize(`${bottom}`)};
    left: ${getSize(`${left}`)};
  }
`;

export const dim = css`
  /* ::after { */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: "";
  background-color: rgb(0, 0, 0, 0.2);
  /* } */
`;

export const sPosterTxt = css`
  color: white;
  padding: 0 ${getVwSize(30)};
  div {
    display: flex;
    margin-top: 0.4rem;
  }
  span {
    flex-grow: 1;
    flex-basis: 33%;
    /* font-size: 2.7vw; */
    font-size: ${getVwSize(18)};
  }
  span:first-child {
    text-align: left;
  }
  span:last-child {
    text-align: right;
  }
  @media screen and (min-width: 640px) {
    padding: 0 ${getSize(30)};
    div {
      margin-top: 0.4rem;
    }
    span {
      font-size: 1.7rem;
    }
  }
`;

export const circleTxt = (color = "white") => css`
  color: ${color};
  p {
    font-size: ${getVwSize(20)};
    border-radius: 100%;
    border: 0.1rem solid ${color};
    padding: 1.2vw 2.5vw 1.4vw;
  }

  @media screen and (min-width: 640px) {
    p {
      font-size: ${getSize(20)};
      padding: 0.8rem 1.6rem 0.9rem;
    }
  }
`;

export const secTitle = (color = "black") => css`
  color: ${color};
  font-size: ${getVwSize(32)};
  @media screen and (min-width: 640px) {
    font-size: ${getSize(32)};
  }
`;

export const defaultTxtStyle = (
  lineHight = "1.8",
  fontSize = "2.4rem",
  marginB = "4rem"
) => css`
  line-height: ${lineHight};
  p {
    font-size: ${getVwSize(`${fontSize}`)};
    margin-bottom: ${getVwSize(`${marginB}`)};
  }
  @media screen and (min-width: 640px) {
    p {
      font-size: ${getSize(`${fontSize}`)};
      margin-bottom: ${getSize(`${marginB}`)};
    }
  }
`;

export const paddingIgnore = css`
  margin-left: calc(-50vw + 50%) !important;
  @media screen and (min-width: 640px) {
    margin-left: calc(50% - 32rem) !important;
  }
`;

export const photoTrans = (trans = "10") => css`
  transform: translate(${getVwSize(`${trans}`)});

  @media screen and (min-width: 640px) {
    transform: translate(${getSize(`${trans}`)});
  }
`;

export const absoluteCenter = css`
  left: 50%;
  transform: translateX(-50%);
`;

export const buttonLine = (fontSize = "2rem", color = "black") => css`
  border-bottom: 0.05rem solid ${color};
  width: fit-content;
  font-size: ${getVwSize(`${fontSize}`)};

  @media screen and (min-width: 640px) {
    font-size: ${getSize(`${fontSize}`)};
  }
`;

const frameAnimation = keyframes`
  0% {
    opacity: 0.5;
    transform: translateY(30%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const animation = css`
  animation: ${frameAnimation} 1.5s forwards;
`;
