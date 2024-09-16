import { useState } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  flex,
  position,
  defaultTxtStyle,
  fontSize,
  boxSize,
  buttonLine,
} from "../utils/sMixinUtils";
import { getSize, getVwSize } from "../utils/sThemeUtils";

function Dropdown({ title, info, font }) {
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <SContainer>
      <STitleDiv onClick={handleClick}>
        <STitle>{title}측 계좌번호</STitle>
        <STitleSvg $dropdown={dropdown} />
      </STitleDiv>
      {/* <SGroup className={dropdown ? "show" : "none"}> */}
      <SGroup $dropdown={dropdown}>
        {info.map((el, idx) => {
          return (
            <SLi key={idx}>
              <SLiTag>
                {el.tag} {el.name}
              </SLiTag>
              <SAccount>
                <p>
                  {el.account[0]} {el.account[1]}
                </p>
                <CopyToClipboard
                  text={`${el.account[1]}`}
                  onCopy={() => {
                    alert("계좌번호가 복사되었습니다.");
                  }}
                >
                  <SCopy $font={font}>복사하기</SCopy>
                </CopyToClipboard>
              </SAccount>
            </SLi>
          );
        })}
      </SGroup>
    </SContainer>
  );
}

export default Dropdown;

const SContainer = styled.div`
  ${flex("column", "", "")};
  /* ${defaultTxtStyle("", "24", "")} */
  /* ${fontSize("20")}; */
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${getVwSize(8)};
  margin: ${getVwSize(20)};

  @media screen and (min-width: 640px) {
    margin: ${getSize(20)};
  }
`;

const STitleDiv = styled.div`
  ${flex("row", "center", "space-between")};
  ${position("relative")};
  padding: ${getVwSize(30)} ${getVwSize(32)};

  @media screen and (min-width: 640px) {
    padding: ${getSize(30)} ${getSize(32)};
  }
`;

const STitle = styled.p`
  ${fontSize("24")};
`;

const SGroup = styled.ul`
  overflow: hidden;
  max-height: ${({ $dropdown }) => ($dropdown ? "1000px" : "0px")};
  opacity: ${({ $dropdown }) => ($dropdown ? "1" : "0")};
  transition: max-height 0.2s ease, opacity 0.3s ease;
  border-top: 0.5px solid rgb(0, 0, 0, 0.2);
  margin: 0 ${getVwSize(32)};

  @media screen and (min-width: 640px) {
    margin: 0 ${getSize(32)};
  }
`;

const SLi = styled.li`
  ${flex("column", "baseline", "")};
  margin: ${getVwSize(32)} 0;

  @media screen and (min-width: 640px) {
    margin: ${getSize(32)} 0;
  }
`;

const SLiTag = styled.p`
  ${fontSize("20")};
  margin-bottom: ${getVwSize(10)};
  @media screen and (min-width: 640px) {
    ${fontSize("20")};
    margin-bottom: ${getSize(10)};
  }
`;

const SAccount = styled.div`
  ${boxSize("100%", "auto")};
  ${defaultTxtStyle("", "24", "")}
  ${flex("row", "baseline", "space-between")};
`;

const SCopy = styled.button`
  ${buttonLine("20", "black")}
  margin: ${getVwSize(8)} 0 ${getVwSize(10)};
  font-family: ${({ $font }) => `${$font}`}, sans-serif;

  @media screen and (min-width: 640px) {
    margin: ${getSize(8)} 0 ${getSize(10)};
  }
`;

const STitleSvg = styled.span`
  &::before {
    content: "";
    border-bottom: 0.1rem solid ${({ theme }) => theme.color.gray};
    ${position("absolute")};
    width: 2%;
    top: 50%;
    right: 6.1vw;
    transform: ${({ $dropdown }) =>
      $dropdown ? "rotateZ(-45deg)" : "rotateZ(45deg)"};
    transition: transform 0.3s ease;
  }

  &::after {
    content: "";
    border-bottom: 0.1rem solid ${({ theme }) => theme.color.gray};
    ${position("absolute")};
    width: 2%;
    top: 50%;
    right: 5vw;
    transform: ${({ $dropdown }) =>
      $dropdown ? "rotateZ(45deg)" : "rotateZ(-45deg)"};
    transition: transform 0.3s ease;
  }

  @media screen and (min-width: 640px) {
    &::before {
      right: 4.15rem;
    }

    &::after {
      right: 3.4rem;
    }
  }
`;
