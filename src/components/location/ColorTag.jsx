import React from "react";
import styled from "styled-components";
import { getSize, getVwSize } from "../../utils/sThemeUtils";

function ColorTag({ lineColor }) {
  const getBgNm = (lineTxt) => {
    switch (lineTxt) {
      case "1호선":
        return "line1";
      case "2호선":
        return "line2";
      case "3호선":
        return "line3";
      case "4호선":
        return "line4";
      case "5호선":
        return "line5";
      case "6호선":
        return "line6";
      case "7호선":
        return "line7";
      case "8호선":
        return "line8";
      case "9호선":
        return "line9";
      case "경강선":
        return "gyeonggang";
      case "경의중앙선":
        return "gyeongui";
      case "경춘선":
        return "gyeongchun";
      case "공항철도":
        return "airport";
      case "김포골드라인":
        return "kimpogold";
      case "서해선":
        return "seohae";
      case "분당선":
        return "bundang";
      case "신림선":
        return "sillim";
      case "신분당선":
        return "sinbundang";
      case "용인에버라인":
        return "everline";
      case "우이신설":
        return "uiSinseol";
      case "의정부경전철":
        return "uiJeongbu";
      case "인천1호선":
        return "incheon01";
      case "인천2호선":
        return "incheon02";
      case "자기부상":
        return "magtrainf";
      case "지선":
        return "busGreen";
      case "간선":
        return "busBlue";
      case "직행":
        return "busRed";
      case "일반":
        return "busDefault";
      case "공항":
        return "busAirport";
      case "마을":
        return "busVillage";
      default:
        return "gray";
    }
  };

  const bgColorClass = getBgNm(lineColor);

  return <STag bgColor={bgColorClass}>●</STag>;
}

export default ColorTag;

const STag = styled.span`
  color: ${({ theme, bgColor }) => theme.color[bgColor]};
  font-size: ${getVwSize(20)};
  margin-right: ${getVwSize(4)};

  @media screen and (min-width: 640px) {
    font-size: ${getSize(20)};
    margin-right: ${getVwSize(4)};
  }
`;
