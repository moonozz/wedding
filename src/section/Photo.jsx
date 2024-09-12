import styled from "styled-components";
import { useScrollEvent } from "../hook/useScrollEvent";
import { useSubTitle } from "../components/subTitle";
import { PhotoSection } from "../components/photo";
import PhotoSwipe from "../components/photo/PhotoSwipe";
import PhotoAlbum from "../components/photo/PhotoAlbum";
import PhotoList from "../components/photo/PhotoList";
import SubTitleTxt from "../components/subTitle/SubTitleTxt";
import { getSize, getVwSize } from "../utils/sThemeUtils";
import { paddingIgnore, animation } from "../utils/sMixinUtils";

function Photo({
  modal,
  setModal,
  subTitle,
  currentImg,
  setCurrentImg,
  sectionColor,
  padding,
  photoInfo,
}) {
  const { ref, isView } = useScrollEvent();

  return (
    <SContainer $sectionColor={sectionColor} $padding={padding}>
      <div ref={ref} className={isView ? "frame-in" : ""}>
        {useSubTitle({
          type: subTitle.type,
          text: "Photo",
          font: subTitle.font,
          color: sectionColor.pointColor,
        })}
        {PhotoSection({
          type: photoInfo.type,
          text: photoInfo.text,
          modal,
          setModal,
          currentImg,
          setCurrentImg,
        })}
      </div>
    </SContainer>
  );
}

export default Photo;

const SContainer = styled.section`
  padding: ${({ $padding }) => `${$padding.top}rem 0 ${$padding.bottom}rem`};
  background-color: ${({ $sectionColor }) => $sectionColor.bg};
  color: ${({ $sectionColor }) => $sectionColor.color};
  ${paddingIgnore};
  width: ${getVwSize(640)};

  div {
    &.frame-in {
      ${animation};
    }
  }

  @media screen and (min-width: 640px) {
    width: ${getSize(640)};
  }
`;
