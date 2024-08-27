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

function Dropdown({ title, info }) {
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
              <p>
                {el.tag} {el.name}
              </p>
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
                  <SCopy>복사하기</SCopy>
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
  ${defaultTxtStyle("", "20", "")}
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
  padding: ${getVwSize(24)};

  @media screen and (min-width: 640px) {
    padding: ${getSize(24)};
  }
`;

const STitle = styled.p`
  ${fontSize("20")};
`;

const SGroup = styled.ul`
  ${boxSize("100%", "auto")};
  overflow: hidden;
  max-height: ${({ $dropdown }) => ($dropdown ? "1000px" : "0px")};
  opacity: ${({ $dropdown }) => ($dropdown ? "1" : "0")};
  transition: max-height 0.2s ease, opacity 0.3s ease;
`;

const SLi = styled.li`
  ${flex("column", "baseline", "")};
  ${fontSize("20")};
  padding: ${getVwSize(16)} ${getVwSize(24)};

  @media screen and (min-width: 640px) {
    padding: ${getSize(16)} ${getSize(24)};
  }
`;

const SAccount = styled.div`
  ${boxSize("100%", "auto")};
  ${flex("row", "baseline", "space-between")};
`;

const SCopy = styled.button`
  ${buttonLine("20", "black")}
  margin: ${getVwSize(8)} 0 ${getVwSize(10)};

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
    right: 4.6vw;
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
    right: 3.5vw;
    transform: ${({ $dropdown }) =>
      $dropdown ? "rotateZ(45deg)" : "rotateZ(-45deg)"};
    transition: transform 0.3s ease;
  }

  @media screen and (min-width: 640px) {
    &::before {
      right: 3.75rem;
    }

    &::after {
      right: 3rem;
    }
  }
`;
