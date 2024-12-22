import { useState } from "react";
import styled from "styled-components";
import data from "./data.json";
import Title from "./Title";
import TitleComment from "../../section/TitleComment";
import Introduce from "../../section/Introduce";
import Photo from "../../section/Photo";
import OurDay from "../../section/OurDay";
import Location from "../../section/Location";
import Account from "../../section/Account";
import CountBtn from "../../components/CountBtn";
import Footer from "../../section/Footer";
import Modal from "../../components/Modal";
import ChildImg from "../../components/ChildImg";
import { getDate } from "../../utils/filter";
import { getSize } from "../../utils/sThemeUtils";
import { flex, boxSize, position } from "../../utils/sMixinUtils";

function Sample05() {
  const [modal, setModal] = useState(false);
  const [currentImg, setCurrentImg] = useState("");
  const [count, setCount] = useState(0);

  const titleComment = `${getDate("onlyNum")}`;
  const subTitle = { color: "#B9AB8D", font: "panchang", type: "underline" };
  const photoInfo = { type: "swipe", text: "사진을 넘겨보세요." };
  const shareImgURL = "https://ifh.cc/g/9q2tcY.jpg";
  const fontFamily = "Pretendard";
  const calenderBg = "color";
  const emojiArr = ["🤵🏻‍♂️", "👰🏻‍♀️", "🎉", "💗", "💐", "🍀", "💒", "🤍", "💍"];

  return (
    <Main>
      <Title />
      <TitleComment
        subTitle={subTitle}
        sectionColor={data.color.titleComment}
        titleComment={titleComment}
      />
      <ChildImg bgColor={data.color.childImg} />
      <Introduce sectionColor={data.color.introduce} />
      <OurDay
        subTitle={subTitle}
        sectionColor={data.color.calendar}
        calenderBg={calenderBg}
        imgUrl={data.img[7]}
      />
      <Photo
        modal={modal}
        setModal={setModal}
        subTitle={subTitle}
        currentImg={currentImg}
        setCurrentImg={setCurrentImg}
        sectionColor={data.color.photo}
        padding={{ top: "8", bottom: "9" }}
        photoInfo={photoInfo}
      />
      <Location
        subTitle={subTitle}
        sectionColor={data.color.location}
        font={fontFamily}
      />
      <Account
        subTitle={subTitle}
        sectionColor={data.color.account}
        padding={{ top: "8", bottom: "6" }}
        font={fontFamily}
      />
      <CountBtn count={count} setCount={setCount} emojiArr={emojiArr} />
      <Footer font={fontFamily} shareImgURL={shareImgURL} />
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

export default Sample05;

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
