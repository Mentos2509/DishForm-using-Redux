import { createGlobalStyle } from "styled-components";
import { ThemeConfig as theme } from "./ThemeConfig";
import "reset-css";

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    font-size: ${theme.sizes.base};
  }

  body {
    font-family: ${theme.font.family};
    font-weight: ${theme.weights.light};
    font-size: ${theme.sizes.s};
    color: ${theme.colors.primary};
    line-height: 1.3;
    min-height: 620px;
  }
`;

export default GlobalStyle;
