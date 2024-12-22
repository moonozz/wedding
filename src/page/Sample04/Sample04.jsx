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
import Toast from "../../components/Toast";
import { getDate } from "../../utils/filter";
import { getSize } from "../../utils/sThemeUtils";
import { flex, boxSize, position } from "../../utils/sMixinUtils";

function Sample04() {
  const [modal, setModal] = useState(false);
  const [currentImg, setCurrentImg] = useState("");
  const [count, setCount] = useState(0);

  const titleComment = `${getDate(data.when, "onlyNum")}`;
  const subTitle = { color: "#B9AB8D", font: "Pretendard", type: "circle" };
  const photoInfo = { type: "swipe", text: "사진을 넘겨보세요." };
  const shareImgURL = "https://ifh.cc/g/vYvW18.jpg";
  const fontFamily = "Pretendard";
  const calenderBg = "photo";
  const music = [
    true,
    `Reverie by Scott Buckley – released under CC-BY 4.0.
          www.scottbuckley.com.au`,
  ];
  const toastMsg = "음악이 준비되어 있습니다. 재생버튼을 눌러주세요.";
  const emojiArr = ["🤵🏻‍♂️", "👰🏻‍♀️", "🎉", "💗", "💐", "🍀", "💒", "🤍", "💍"];

  return (
    <Main>
      <Toast text={toastMsg} />
      <Title />
      <TitleComment
        data={data}
        subTitle={subTitle}
        sectionColor={data.color.titleComment}
        titleComment={titleComment}
      />
      <ScrollImg imgUrl={data.img[6]} />
      <Introduce data={data} sectionColor={data.color.introduce} />
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
      <OurDay
        data={data}
        subTitle={subTitle}
        sectionColor={data.color.calendar}
        calenderBg={calenderBg}
        imgUrl={data.img[7]}
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
      <Footer
        data={data}
        font={fontFamily}
        shareImgURL={shareImgURL}
        music={music}
      />
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
