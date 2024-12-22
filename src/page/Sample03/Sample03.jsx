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
import ScrollImg from "../../components/ScrollImg";
import { getDate } from "../../utils/filter";
import { getSize } from "../../utils/sThemeUtils";
import { flex, boxSize, position } from "../../utils/sMixinUtils";

function Sample03() {
  const [modal, setModal] = useState(false);
  const [currentImg, setCurrentImg] = useState("");
  const [count, setCount] = useState(0);

  const titleComment = `${getDate(data.when, "onlyNum")}`;
  const subTitle = { font: "NanumMyeongjoBold", type: "()" };
  const photoInfo = { type: "swipe", text: "사진을 넘겨보세요." };
  const shareImgURL = "https://ifh.cc/g/zch9xJ.png";
  const fontFamily = "NanumMyeongjo";
  const calenderBg = "photo";
  const emojiArr = ["🤵🏻‍♂️", "👰🏻‍♀️", "🎉", "💗", "💐", "🍀", "💒", "🤍", "💍"];

  return (
    <Main>
      <Title font={"Pinyon Script"} />
      <TitleComment
        data={data}
        subTitle={subTitle}
        sectionColor={data.color.titleComment}
        titleComment={titleComment}
      />
      <OurDay
        data={data}
        subTitle={subTitle}
        sectionColor={data.color.calendar}
        calenderBg={calenderBg}
        imgUrl={data.img[8]}
      />
      <Introduce data={data} sectionColor={data.color.introduce} />
      <ScrollImg imgUrl={data.img[6]} />

      <Photo
        dataImg={data.img}
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
        data={data}
        subTitle={subTitle}
        sectionColor={data.color.location}
        font={fontFamily}
      />
      <Account
        data={data}
        subTitle={subTitle}
        sectionColor={data.color.account}
        padding={{ top: "8", bottom: "6" }}
        font={fontFamily}
      />
      <CountBtn count={count} setCount={setCount} emojiArr={emojiArr} />
      <Footer data={data} font={fontFamily} shareImgURL={shareImgURL} />
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

export default Sample03;

const Main = styled.div`
  ${position("relative")};
  ${flex("column", "", "")};
  /* background-color: #f4f4f4; */
  ${boxSize("100vw", "")};
  max-width: ${getSize(640)};
  min-width: ${getSize(200)};
  text-align: center;
  font-family: "NanumMyeongjo", sans-serif;
  overflow-y: ${({ modal }) => (modal ? "hidden" : "auto")};

  @media screen and (min-width: 640px) {
    ${boxSize("100%", "")}
  }
`;
