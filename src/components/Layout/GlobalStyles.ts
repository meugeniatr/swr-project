import { createGlobalStyle } from "styled-components";
import { QUERIES } from "../../constants";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
  margin: 0;
  }
  
  html{
    --primary: hsl(13, 76%, 64%);
    --dark: hsl(0, 0%, 8%);
    --white: hsl(0deg 0% 100%);
    --font-size-normal: ${16 / 16}rem;
    --font-size-small: ${14 / 16}rem;
    --font-size-title1: ${24 / 16}rem;
  }

  html, body {
    height: 100%;
  }

  body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-color: var(--dark);
  color: var(--white);
  font-family: 'Open sans', sans-serif;
  margin: 0px 22px;
  overflow-wrap: break-word;
  
  @media ${QUERIES.laptopAndUp} {
     margin: 0px 36px;
   }
   @media ${QUERIES.desktopAndUp} {
     margin: 0px 40px;
   }
  }

  img {
  display: block;
  max-width: 100%;
  }

  button {
  font: inherit;
  }


  p {
  overflow-wrap: break-word;
  padding: 0;
  }

  h2 {
    font-weight: 600;
  }

  #root, #__next {
  isolation: isolate;
  height: 100%;
  }
`;

export default GlobalStyles;
