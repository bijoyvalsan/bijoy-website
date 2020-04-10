import { createGlobalStyle } from 'styled-components';

const AppStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

html,
body {
  overscroll-behavior-y: contain;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  user-select: none;
  font-family: Roboto,
    sans-serif;
  position: fixed;
  overflow: hidden;
  color: #666 !important;
}

#root {
  background: rgb(195,206,231);
  background: linear-gradient(0deg, rgba(195,206,231,0.8183648459383753) 0%, rgba(0,47,70,0.9808298319327731) 100%);
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
`;

export default AppStyles;