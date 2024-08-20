import React from "react";
import styled from "styled-components";
import data from "../data/data.json";
import SubTitle from "../components/SubTitle";
import List from "../components/locationSection/List";
import { boxSize, flex, fontFamily, paddingIgnore } from "../utils/sMixinUtils";
import { getSize, getVwSize } from "../utils/sThemeUtils";

function Location() {
  const locationData = data.location;

  return (
    <SContainer>
      <SubTitle text={"Location"} />
      <SAddress>
        <SHallName>{locationData.weddingHall}</SHallName>
        <SHallAddress>{locationData.address}</SHallAddress>
      </SAddress>
      <SMap />
      <List type={"subway"} title={"지하철"} el={locationData.subway} />
      <List type={"bus"} title={"버스"} el={locationData.bus} />
    </SContainer>
  );
}

export default Location;

const SContainer = styled.div`
  ${boxSize("100%", "auto")};
  ${flex("column", "", "")};
  ${fontFamily("MaruBuri", "")}
  padding: ${getSize(60)} 0 ${getSize(90)};
`;

const SAddress = styled.div`
  ${flex("column", "", "")};
  padding: ${getSize(40)} 0 ${getSize(40)};
`;

const SHallName = styled.p`
  font-size: ${getVwSize(24)};

  @media screen and (min-width: 640px) {
    font-size: ${getSize(24)};
  }
`;

const SHallAddress = styled.p`
  font-size: ${getVwSize(20)};
  margin: ${getSize(10)} 0;

  @media screen and (min-width: 640px) {
    font-size: ${getSize(20)};
  }
`;

const SMap = styled.div`
  ${boxSize("100vw", "35rem")};
  background-color: black;
  ${paddingIgnore};
  margin-bottom: ${getVwSize(60)};
  @media screen and (min-width: 640px) {
    ${boxSize("64rem", "35rem")};
    margin-bottom: ${getSize(60)};
  }
`;
