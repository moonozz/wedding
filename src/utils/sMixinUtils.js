import { css } from "styled-components";
import { getSize, getVwSize } from "./sThemeUtils";

export const boxSize = (width = "100%", height = "100%") => css`
  width: ${width};
  height: ${height};
`;

export const position = (position = "relative") => css`
  position: ${position};
`;

export const fontFamily = (family = "Aoboshi One") => css`
  font-family: ${family}, sans-serif;
  font-style: normal;
  //"Aoboshi One", "Abril Fatface", "MaruBuri",
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

export const trbl = (top = "0", right = "0", bottom = "0", left = "0") => css`
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
