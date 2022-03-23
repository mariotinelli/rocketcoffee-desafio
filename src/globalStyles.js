import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Manrope", sans-serif;
    }

  body {
    background: var(--background);
    text-align: center;
  }

  :root {

  // Colors
  --background: #000;
  --text-color: #FFF;
  --button: #8257E5;
  --border: #29292E;
  --border-menu-mobile: #A8A8B3;
  --text-color-menu-mobile: #E1E1E6;

  // Fonts
  --font-1: 0.875rem; // 14px
  --font-2: 0.6875rem; // 11px
  --font-3: 5rem; // 80px
  --font-4: 3.125rem; // 50px
  --font-5: 1.875rem; // 30px
}

`;
 
export default GlobalStyle;