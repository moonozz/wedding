import React, { useState } from "react";
import styled from "styled-components";
import data from "../../data/data.json";
import Modal from "../Modal";
import { recordImg } from "../../utils/filter";
import { getSize, getVwSize } from "../../utils/sThemeUtils";
import {
  boxSize,
  position,
  flex,
  fontFamily,
  fontSize,
} from "../../utils/sMixinUtils";

function PhotoList({ imgUrl, discript, modal, setModal }) {
  const [currentImg, setCurrentImg] = useState("");

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
    </SContainer>
  );
}

export default PhotoList;

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
  columns: 2;
  column-gap: 3rem;
`;

const SDiscript = styled.p`
  ${fontFamily("MaruBuri", "400")};
  ${fontSize("24")}
  margin: ${getVwSize(40)} 0;

  @media screen and (min-width: 640px) {
    margin: ${getSize(40)} 0;
  }
`;

const SImgLi = styled.li`
  ${flex("row", "center", "center")};
  ${position("relative")};
  ${boxSize("100%", "auto")}
  margin-bottom: ${getSize(40)};
`;

const SImage = styled.img`
  ${boxSize("100%", "auto")};
  object-fit: cover;
  border-radius: ${getVwSize(10)};
  @media screen and (min-width: 640px) {
    border-radius: ${getSize(10)};
  }
`;
