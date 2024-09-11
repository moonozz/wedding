import React from "react";
import styled from "styled-components";
import data from "../data/data.json";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import { useCopy } from "../hook/useCopy";
import SubTitle from "../components/SubTitle";
import Map from "../components/location/Map";
import List from "../components/location/List";
import {
  boxSize,
  flex,
  buttonLine,
  fontSize,
  sectionPadding,
} from "../utils/sMixinUtils";
import { getSize, getVwSize } from "../utils/sThemeUtils";

function Location({ subTitle, sectionColor }) {
  // const { onCopy } = useCopy();

  const locationData = data.location;

  // const handleCopy = (txt) => {
  // onCopy(txt);
  // };

  return (
    <SContainer $sectionColor={sectionColor}>
      <SubTitle text={"Location"} font={subTitle.font} color={subTitle.color} />
      <SAddress>
        <SHallName>{locationData.weddingHall}</SHallName>
        <SHallAddress>{locationData.address}</SHallAddress>
        {/* <SCopy onClick={() => handleCopy(`${locationData.address}`)}>
          주소 복사하기
        </SCopy> */}
        <CopyToClipboard
          text={`${locationData.address}`}
          onCopy={() => {
            alert("주소가 복사되었습니다.");
          }}
        >
          <SCopy>주소 복사하기</SCopy>
        </CopyToClipboard>
      </SAddress>
      <Map />
      <List type={"subway"} title={"지하철"} el={locationData.subway} />
      <List type={"bus"} title={"버스"} el={locationData.bus} />
      <List type={"parking"} title={"주차장 안내"} el={locationData.parking} />
    </SContainer>
  );
}

export default Location;

const SContainer = styled.div`
  ${boxSize("100%", "auto")};
  ${flex("column", "", "")};
  ${sectionPadding};
  background-color: ${({ $sectionColor }) => $sectionColor.bg};
  color: ${({ $sectionColor }) => $sectionColor.color};
`;

const SAddress = styled.div`
  ${flex("column", "center", "")};
  padding: ${getVwSize(40)} 0 ${getVwSize(26)};

  @media screen and (min-width: 640px) {
    padding: ${getSize(40)} 0;
  }
`;

const SHallName = styled.p`
  ${fontSize("24")};
`;

const SHallAddress = styled.p`
  ${fontSize("20")};
  margin: ${getSize(10)} 0 0;
`;

const SCopy = styled.button`
  ${buttonLine("20", "black")}
  margin: ${getVwSize(8)} 0 ${getVwSize(10)};

  @media screen and (min-width: 640px) {
    margin: ${getSize(8)} 0 ${getSize(10)};
  }
`;
