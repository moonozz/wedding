import { useEffect, useRef } from "react";
import styled from "styled-components";
import useGetGeo from "./useGetGeo";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import { boxSize, paddingIgnore } from "../../utils/sMixinUtils";

// function Map() {
function Map() {
  const mapRef = useRef(null);
  const { naver } = window;
  const { geoData, locationData, loading, err } = useGetGeo();

  const location = new naver.maps.LatLng(geoData.y, geoData.x);

  const mapOptions = {
    center: location, // 지도 초기 중심 좌표
    logoControl: false, // 네이버 로고 표시 X
    mapDataControl: false, // 지도 데이터 저작권 컨트롤 표시 X
    scaleControl: true, // 지도 축척 컨트롤의 표시 여부
    tileDuration: 200, // 지도 타일을 전환할 때 페이드 인 효과의 지속 시간(밀리초)
    zoom: 15, // 지도의 초기 줌 레벨
    minZoom: 10, // 지도 최소 줌 레벨
    zoomControl: false, // 줌 컨트롤 표시
  };

  useEffect(() => {
    if (geoData.x !== 0 && geoData.y !== 0) {
      const map = new naver.maps.Map(mapRef.current, mapOptions);
      const marker = new naver.maps.Marker({
        position: location,
        map: map,
      });
    }
  }, [geoData]);

  return <SContainer id="map" ref={mapRef} />;
}

export default Map;

const SContainer = styled.div`
  ${boxSize("100vw", "70vw")};
  background-color: black;
  ${paddingIgnore};
  margin-bottom: ${getVwSize(60)};

  @media screen and (min-width: 640px) {
    ${boxSize("64rem", "35rem")};
    margin-bottom: ${getSize(60)};
  }
`;
