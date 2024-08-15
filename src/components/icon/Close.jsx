import React from "react";
import styled from "styled-components";
import { getSize, getVwSize } from "../../utils/sThemeUtils";

function Heart({ stroke, color, width, height, strokeWidth }) {
  return (
    <Svg
      $width={width}
      $height={height}
      viewBox="0 0 32 32"
      $fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5L27 27"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27 5L5 27"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default Heart;

const Svg = styled.svg`
  width: ${({ $width }) => getVwSize($width)};
  height: ${({ $height }) => $height};
  fill: ${({ $fill }) => $fill};
  /* stroke: ${({ $stroke }) => $stroke}; */
  @media screen and (min-width: 640px) {
    width: ${({ $width }) => getSize($width)};
  }
`;
