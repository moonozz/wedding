import { useState } from "react";
import styled from "styled-components";
import Title from "./Title";
// import Title from "../../section/Title";
import TitleComment from "../../section/TitleComment";
import Introduce from "../../section/Introduce";
import Photo from "../../section/Photo";
import OurDay from "../../section/OurDay";
import Location from "../../section/Location";
import Account from "../../section/Account";
import Footer from "../../section/Footer";
import FixedBtn from "../../section/FixedBtn";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import { flex, boxSize, position } from "../../utils/sMixinUtils";

function Sample01() {
  const [modal, setModal] = useState(false);
  const subTitle = "Abril Fatface";

  return (
    <Main>
      <Title font={"Pretendard"} />
      <TitleComment font={subTitle} />
      <Introduce />
      <Photo modal={modal} setModal={setModal} font={subTitle} />
      <OurDay font={subTitle} />
      <Location font={subTitle} />
      <Account font={subTitle} />
      <Footer />
      <FixedBtn />
    </Main>
  );
}

export default Sample01;

const Main = styled.div`
  ${position("relative")}
  ${flex("column", "", "")}
  background-color: #f4f4f4;
  ${boxSize("100vw", "")}
  max-width: ${getSize(640)};
  min-width: ${getSize(200)};
  padding: 0 ${getSize(20)} 0;
  text-align: center;
  font-family: "MaruBuri", sans-serif;

  @media screen and (min-width: 640px) {
    padding: 0 ${getSize(20)} 0;
    ${boxSize("100%", "")}
  }
`;
