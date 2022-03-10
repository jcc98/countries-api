import { useState } from "react";
import styled from "styled-components";
import {
  AiOutlineSearch,
  AiOutlineArrowDown,
  AiOutlineClose,
} from "react-icons/ai";
import { motion } from "framer-motion";
import FilterRegion from "./filter-region";

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
  padding: 0rem 3rem;
  display: flex;
  position: relative;
  transition: all 0.3s;
  box-shadow: 0px 0px 11px 0px rgba(109, 109, 109, 0.31);
  align-self: center;
  :hover {
    cursor: pointer;
    background-color: #f8f8f8;
  }
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

const Arrow = styled.div`
  align-self: center;
  text-align: center;
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
  const [filterRegionState, setFilterRegionState] = useState(false);
  const [filterRegionValue, setFilterRegionValue] = useState("");
  console.log(filterRegionValue);
  console.log(countries);
  const SetFilterRegion = (value) => {
    setFilterRegionValue(value.target.innerHTML);
  };

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
        <FilterContainer>
          <div onClick={() => setFilterRegionState(!filterRegionState)}>
            <p>Filter by region</p>
            <Arrow>
              {!filterRegionState && <AiOutlineArrowDown size={12} />}
              {filterRegionState && <AiOutlineClose size={12} />}
            </Arrow>
          </div>
          {filterRegionState && <FilterRegion RegionValue={SetFilterRegion} />}
        </FilterContainer>
      </SearchFilterContainer>

      <CardsContainer>
        {countries
          .filter((word) => {
            if (word.region === filterRegionValue) {
              return word;
            }
          })
          .map((a) => a.name.common)}
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
          .sort((a, b) => {
            let fa = a.name.common.toLowerCase();
            let fb = b.name.common.toLowerCase();
            if (fa < fb) {
              return -1;
            }
            if (fa > fb) {
              return 1;
            }
            return 0;
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
