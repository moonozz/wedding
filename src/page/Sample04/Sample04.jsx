import { useState } from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import colorData from "./color.json";
import Title from "./Title";
import TitleComment from "./TitleComment";
import Introduce from "../../section/Introduce";
import Photo from "../../section/Photo";
import OurDay from "../../section/OurDay";
import Location from "../../section/Location";
import Account from "../../section/Account";
import Footer from "../../section/Footer";
import Modal from "../../components/Modal";
import ScrollImg from "../../components/ScrollImg";
import Toast from "../../components/Toast";
import { getSize } from "../../utils/sThemeUtils";
import { flex, boxSize, position, fontSize } from "../../utils/sMixinUtils";

function Sample04() {
  const [modal, setModal] = useState(false);
  const [currentImg, setCurrentImg] = useState("");
  const titleComment = "240330";
  const subTitle = { color: "#B9AB8D", font: "Pretendard", type: "circle" };
  const photoInfo = { type: "swipe", text: "사진을 넘겨보세요." };
  const shareImgURL = "https://ifh.cc/g/5Jv2t9.jpg";
  const fontFamily = "Pretendard";
  const calenderBg = "photo";
  const music = [
    true,
    `Reverie by Scott Buckley – released under CC-BY 4.0.
          www.scottbuckley.com.au`,
  ];
  const toastMsg = "음악이 준비되어 있습니다. 재생버튼을 눌러주세요.";

  return (
    <Main>
      <Toast text={toastMsg} />
      <Title />
      <TitleComment
        subTitle={subTitle}
        sectionColor={colorData.titleComment}
        titleComment={titleComment}
      />
      <ScrollImg imgUrl={data.img[6]} />
      <Introduce subTitle={subTitle} sectionColor={colorData.introduce} />
      <Photo
        modal={modal}
        setModal={setModal}
        subTitle={subTitle}
        currentImg={currentImg}
        setCurrentImg={setCurrentImg}
        sectionColor={colorData.photo}
        padding={{ top: "8", bottom: "9" }}
        photoInfo={photoInfo}
      />
      <OurDay
        subTitle={subTitle}
        sectionColor={colorData.calendar}
        calenderBg={calenderBg}
        imgUrl={data.img[7]}
      />
      <Location
        subTitle={subTitle}
        sectionColor={colorData.location}
        font={fontFamily}
      />
      <Account
        subTitle={subTitle}
        sectionColor={colorData.account}
        padding={{ top: "8", bottom: "6" }}
        font={fontFamily}
      />
      <Footer font={fontFamily} shareImgURL={shareImgURL} music={music} />
      {modal ? (
        <Modal
          imgUrl={currentImg}
          modal={modal}
          setModal={setModal}
          setCurrentImg={setCurrentImg}
        />
      ) : (
        ""
      )}
    </Main>
  );
}

export default Sample04;

const Main = styled.div`
  ${position("relative")};
  ${flex("column", "", "")};
  /* background-color: #f4f4f4; */
  ${boxSize("100vw", "")};
  max-width: ${getSize(640)};
  min-width: ${getSize(200)};
  text-align: center;
  font-family: "Pretendard", sans-serif;
  overflow-y: ${({ modal }) => (modal ? "hidden" : "auto")};

  @media screen and (min-width: 640px) {
    ${boxSize("100%", "")}
  }
`;
