import { Navigation } from "./nav";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function CountryInfo({ countrySelected }) {
  const countryArray = countrySelected[0];
  const nativeName = Object.values(countryArray.name.nativeName);
  const languagesArray = Object.values(countryArray.languages);
  console.log(countryArray);

  const Flex = styled.div`
    display: flex;
    justify-content: flex-start;
  `;

  const BackButton = styled.a`
    box-shadow: 1px 1px 15px -1px rgba(104, 104, 104, 0.49);
    margin: 7rem 0 0rem 3rem;
    display: inline-block;
    padding: 0.8rem 2.2rem;
    transition: 0.4s all;
    font-size: 0.75rem;

    &:hover {
      cursor: pointer;
      background-color: #ddd;
    }
  `;

  const CountryInfoContainer = styled.div`
    & h2 {
      font-size: 2rem;
    }

    & p {
      font-size: 0.85rem;
      line-height: 0.7rem;
    }
  `;

  const CountryImageContainer = styled.img`
    display: block;
    width: 470px;
    height: 340px;
    align-self: center;
    margin: 0 3rem;
  `;

  return (
    <div>
      <Navigation />
      <BackButton href="/">
        <AiOutlineArrowLeft />
        Back
      </BackButton>
      <Flex>
        <CountryImageContainer src={countryArray.flags.svg} />
        <CountryInfoContainer>
          <h2>{countryArray.name.common}</h2>
          <p>
            <strong>Native Name:</strong>
            {nativeName.map((name, i, arr) => {
              if (arr.length - 1 === i) {
                return <span>{name.common}</span>;
              } else {
                return <span>{name.common}, </span>;
              }
            })}
          </p>
          <p>
            <strong>Top Level Domain:</strong> {countryArray.tld}
          </p>
          <p>
            <strong>Population:</strong>{" "}
            {new Intl.NumberFormat().format(countryArray.population)}
          </p>
          <p>
            <strong>Currencies:</strong>{" "}
            {Object.values(countryArray.currencies)[0].name}
          </p>
          <p>
            <strong>Region:</strong> {countryArray.region}
          </p>
          <p>
            <strong>Languages:</strong>{" "}
            {languagesArray.map((language, i, arr) => {
              if (arr.length - 1 === i) {
                return <span>{language}</span>;
              } else {
                return <span>{language}, </span>;
              }
            })}
          </p>
          <p>
            <strong>Sub Region: </strong>
            {countryArray.subregion}
          </p>
          <p>
            <strong>Capital:</strong> {countryArray.capital}
          </p>
          <strong>Border countries:</strong>{" "}
          {countryArray.borders &&
            countryArray.borders.map((country) => country)}
          {!countryArray.borders && "None"}
        </CountryInfoContainer>
      </Flex>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${params.countryId}`
  );
  const results = await res.json();
  return {
    props: {
      countrySelected: results,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();
  return {
    paths: countries.map((country) => {
      return {
        params: {
          countryId: country.name.common.toUpperCase(),
        },
      };
    }),
    fallback: false,
  };
}
