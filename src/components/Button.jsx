import React from "react";
import styled from "styled-components";

function Button({ onClick, children }) {
  return <Btn onClick={onClick}>{children}</Btn>;
}

export default Button;

const Btn = styled.button`
  padding: 1.3rem 1.4rem 1.3rem;
  border-radius: 100%;
  border: none;
  background-color: rgb(26, 26, 26, 0.1);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  cursor: pointer;

  &:hover {
    background-color: rgb(26, 26, 26, 0.2);
  }
`;
