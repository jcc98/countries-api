import { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { motion } from "framer-motion";

const SearchFilterContainer = styled.div`
  margin: 7rem 3rem;
  display: flex;
  justify-content: space-between;
`;

const CardTextContainer = styled.div`
  line-height: 0.4;
  padding: 1rem;

  & h3 {
    margin-bottom: 2rem;
    font-size: 1rem;
    width: 218px;
    line-height: 1rem;
  }
`;

const SingleCardContainer = styled.div`
  box-shadow: 0px 0px 14px 2px rgba(147, 147, 147, 0.28);
  border-radius: 1rem;
  margin: 1rem 1rem;
  display: inline-block;
`;

const FilterContainer = styled.div`
  padding: 1rem 4rem;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 4.5rem;
  & p {
    width: 218px;
    line-height: 1rem;
  }
`;

const Flex = styled.div`
  display: flex;
  box-shadow: 0px 0px 11px 0px rgba(109, 109, 109, 0.31);
  align-self: center;
`;
const SearchInput = styled.input`
  padding: 0.7rem 6rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 0px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #cecece;
  }
`;

export const AllCountries = ({ countries }: { countries: any }) => {
  const [filteredCountry, setFilteredCountry] = useState("");

  return (
    <>
      <SearchFilterContainer>
        <Flex>
          <Flex>
            <AiOutlineSearch size={20} />
          </Flex>
          <SearchInput
            onChange={(e) => setFilteredCountry(e.target.value)}
            placeholder="Search for a country..."
          />
        </Flex>
        <Flex>
          <FilterContainer>Filter by region</FilterContainer>
        </Flex>
      </SearchFilterContainer>

      <CardsContainer>
        {countries
          .filter((word) => {
            if (filteredCountry === "") {
              return word;
            } else if (
              word.name.common.toLowerCase().includes(filteredCountry)
            ) {
              return word;
            }
          })
          .map((country) => {
            return (
              <motion.div whileHover={{ scale: 1.1 }}>
                <SingleCardContainer>
                  <a
                    href={country.name.common.toUpperCase()}
                    className="country-card"
                  >
                    <img src={country.flags.png} width={"250"} />
                    <CardTextContainer>
                      <h3>{country.name.common}</h3>
                      <p>
                        <strong>Population:</strong>{" "}
                        {new Intl.NumberFormat().format(country.population)}
                      </p>
                      <p>
                        <strong>Region:</strong> {country.region}
                      </p>
                      <p>
                        <strong>Capital:</strong> {country.capital}
                        {!country.capital && "None"}
                      </p>
                    </CardTextContainer>
                  </a>
                </SingleCardContainer>
              </motion.div>
            );
          })}
      </CardsContainer>
    </>
  );
};
