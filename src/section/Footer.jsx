import styled from "styled-components";
import data from "../data/data.json";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useShare } from "../hook/useShare";
import {
  flex,
  boxSize,
  paddingIgnore,
  fontSize,
  fontFamily,
} from "../utils/sMixinUtils";
import { getSize, getVwSize } from "../utils/sThemeUtils";

function Footer() {
  const { handleShare } = useShare();
  // const imgUrl = `${process.env.PUBLIC_URL}/assets/${data.img[0]}`;
  const imgUrl = "https://ifh.cc/g/zSRt9K.jpg";

  return (
    <SContainer>
      <SBtn
        $bgColor={"#fce777"}
        $fontColor={"black"}
        onClick={() => handleShare(imgUrl)}
      >
        카카오톡 공유하기
      </SBtn>
      <CopyToClipboard
        text={"http://localhost:3000"}
        onCopy={() => {
          alert("청첩장 링크가 복사되었습니다.");
        }}
      >
        <SBtn $bgColor={"black"} $fontColor={"white"}>
          청첩장 링크 복사하기
        </SBtn>
      </CopyToClipboard>
      <Stxt>ⓒweddingmoon</Stxt>
    </SContainer>
  );
}

export default Footer;

const SContainer = styled.section`
  ${paddingIgnore};
  ${boxSize("100vw", "auto")};
  ${flex("column", "center", "center")};
  ${fontFamily("MaruBuri")};
  background-color: ${({ theme }) => theme.color.white};
  padding: ${getVwSize(50)} ${getVwSize(40)};

  @media screen and (min-width: 640px) {
    ${boxSize("640px", "auto")};
    padding: ${getSize(50)} ${getSize(40)};
  }
`;

const SBtn = styled.button`
  ${boxSize("100%", "auto")};
  ${fontSize(20)};
  ${fontFamily("MaruBuri")};
  border-radius: ${getVwSize(8)};
  padding: ${getVwSize(16)};
  margin-bottom: ${getVwSize(16)};
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ $fontColor }) => $fontColor};
`;

const Stxt = styled.p`
  ${fontSize(18)};
  padding: ${getVwSize(60)} 0 ${getVwSize(20)};
`;
