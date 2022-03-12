import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#fff",
  backgroundSecond: "#fff",
  shadow: "hsla(0,0%,52%,0.274)",
};
export const darkTheme = {
  body: "#202c37",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#202c37",
  backgroundSecond: "#2b3945",
  shadow: "0px 0px 7px 4px rgba(30,16,35,0.97)",
};

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
}

input {
  background-color: ${(props) => props.theme.backgroundSecond}
}

body {
  box-shadow: ${(props) => props.theme.shadow}
}

`;
