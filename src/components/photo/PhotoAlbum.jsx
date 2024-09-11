import styled from "styled-components";
import data from "../../data/data.json";
import { recordImg } from "../../utils/filter";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import {
  boxSize,
  position,
  flex,
  fontSize,
  paddingIgnore,
} from "../../utils/sMixinUtils";

function PhotoAlbum({
  imgUrl,
  discript,
  modal,
  setModal,
  currentImg,
  setCurrentImg,
}) {
  const imgData = data.img.slice(1);

  const handleModalOpen = (img) => {
    setModal(true);
    setCurrentImg(img);
  };

  return (
    <SContainer>
      <SDiscript>{discript}</SDiscript>
      <SImageContainer>
        {recordImg(imgData).map((el) => {
          return (
            <SImgLi key={el}>
              <SImage
                src={`${process.env.PUBLIC_URL}/assets/${el}`}
                alt={el}
                onClick={() => handleModalOpen(el)}
              />
            </SImgLi>
          );
        })}
      </SImageContainer>
    </SContainer>
  );
}

export default PhotoAlbum;

const SContainer = styled.div`
  ${boxSize("100%", "auto")};
  padding: 0 ${getVwSize(50)};
  flex-flow: column wrap;
  ${flex("column", "", "")};
  ${position("relative")};

  @media screen and (min-width: 640px) {
    padding: 0 ${getSize(50)};
  }
`;

const SImageContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${paddingIgnore};
  ${boxSize("100vw", "auto")};

  @media screen and (min-width: 640px) {
    ${boxSize("640px", "auto")};
  }
`;

const SDiscript = styled.p`
  ${fontSize("24")}
  margin: ${getVwSize(40)} 0;
  padding-right: ${getVwSize(50)}; // 사진 가운데 배치용

  @media screen and (min-width: 640px) {
    margin: ${getSize(40)} 0;
    padding-right: ${getSize(50)};
  }
`;

const SImgLi = styled.li`
  ${flex("row", "center", "center")};
  ${position("relative")};
  ${boxSize("100%", "38vw")};
  @media screen and (min-width: 640px) {
    ${boxSize("100%", "250px")};
  }
`;

const SImage = styled.img`
  ${boxSize("100%", "100%")};
  object-fit: cover;
`;
