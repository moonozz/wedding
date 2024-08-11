import React from "react";
import styled from "styled-components";
import { getSize, getVwSize } from "../../utils/sThemeUtils";

function Heart({ stroke, color, width, height }) {
  return (
    <Svg
      $width={width}
      $height={height}
      viewBox="0 0 32 32"
      $fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.6736 16.8659L16.013 28L4.35233 16.8659C3.58321 16.1444 2.97738 15.2771 2.57299 14.3187C2.16861 13.3603 1.97444 12.3316 2.0027 11.2973C2.03095 10.263 2.28104 9.24558 2.73719 8.30904C3.19335 7.37251 3.84569 6.53718 4.65315 5.85566C5.46061 5.17413 6.4057 4.66117 7.42889 4.34908C8.45208 4.03699 9.53121 3.93253 10.5983 4.04228C11.6655 4.15203 12.6975 4.47361 13.6293 4.98677C14.5612 5.49993 15.3728 6.19355 16.013 7.02395C16.6559 6.19958 17.4684 5.51201 18.3997 5.0043C19.3309 4.49659 20.3608 4.17966 21.4249 4.07334C22.4891 3.96702 23.5645 4.07361 24.5839 4.38642C25.6034 4.69924 26.5449 5.21156 27.3495 5.89131C28.1541 6.57106 28.8045 7.40361 29.2601 8.33686C29.7156 9.2701 29.9664 10.284 29.9969 11.315C30.0273 12.346 29.8366 13.3719 29.4369 14.3286C29.0371 15.2853 28.4368 16.1522 27.6736 16.8749"
        $stroke={stroke}
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
  stroke: ${({ $stroke }) => $stroke};
  @media screen and (min-width: 640px) {
    width: ${({ $width }) => getSize($width)};
  }
`;
