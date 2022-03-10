import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Navigation } from "./nav";
import styles from "../styles/Home.module.css";
import { AllCountries } from "./all-countries";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

export async function getServerSideProps() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();

  return { props: { data } };
}

const Home: React.FC<any> = ({ data }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Navigation />
        <AllCountries countries={data} />
      </ThemeProvider>
    </>
  );
};
export default Home;
