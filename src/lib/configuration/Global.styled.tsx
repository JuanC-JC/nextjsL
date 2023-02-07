import { createGlobalStyle } from "styled-components";
import mixins from "./mixins.styled"

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    ${mixins.H1_MOBILE}
  }

  h3 {
    ${mixins.H3_MOBILE}
  }

  @media (min-width: 720px) {
    h1{
      ${mixins.H1_DESKTOP}
    }
  }
`