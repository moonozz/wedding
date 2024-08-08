import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @mixin flex($direction: 'column') {
    display: flex;
    flex-direction: $direction;
  }

  @mixin width100($width: '100') {
    width: $width;
  }

  @mixin aoboshiOne($fontFamily: 'Aoboshi One') {
    font-family: $fontFamily;
  }

  @mixin position($position: 'relative') {
    position: $position;
  }

  @mixin flexCenter($align:'center', $justify:'center'){
    display: flex;
    align-items: $align;
    justify-content: $justify;
  }
`;

export default GlobalStyle;
