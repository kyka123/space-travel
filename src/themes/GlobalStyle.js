import { createGlobalStyle } from 'styled-components';
import HeroImage from 'assets/HeroImage.jpg';
const GlobalStyle = createGlobalStyle` 
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }
  html {
    font-size: 62.5%;

  }
  body {
    font-size: 1.6rem;
    margin:0;
    padding:0;
    font-family: 'Kanit', sans-serif;
    background-color: #000;
    background-image: url(${HeroImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;

export default GlobalStyle;
