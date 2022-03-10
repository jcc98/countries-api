import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
  backgroundSecond: "#fff",
};
export const darkTheme = {
  body: "#202c37",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#202c37",
  backgroundSecond: "#2b3945",
};

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
}

`;
