import {useState} from "react"
import styled from "styled-components"
import {AiOutlineSearch} from "react-icons/ai"


const SearchFilterContainer = styled.div`
    margin: 8rem 3rem;
    display: flex;
    justify-content: space-between;
`

const FilterContainer = styled.div`
    padding: 1rem 4rem;`


const Flex = styled.div`
    display: flex;
    box-shadow: 5px 5px 14px 1px rgba(160,160,160,0.34);
    align-self: center;    
    `
const SearchInput = styled.input`
    padding: 1rem 6rem;
    font-size: 1.1rem;
    border: none;
    border-radius: 0px;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: #cecece;
    }
`

export const AllCountries = ({countries}:{countries:any}) => {
    const [filteredCountry, setFilteredCountry] = useState("")

    return(
        <>
            <SearchFilterContainer>
                <Flex>
                    
                    <Flex><AiOutlineSearch size={20}/></Flex>
                    <SearchInput onChange={(e) => setFilteredCountry(e.target.value)} placeholder="Search for a country..."/>
                </Flex>    
                <Flex><FilterContainer>Filter by region</FilterContainer></Flex>
            </SearchFilterContainer>
            {countries.filter((word) => {
                if (filteredCountry === "") {
                    return word
                } else if (word.name.common.toLowerCase().includes(filteredCountry)) {
                    return word
                }
            }).map((country) => {
                return (
                <a href={country.name.common.toUpperCase()} className="country-card">
                    <div className="card-img"><img src={country.flags.png}/></div>
                    <div className="card-data">
                    <h3>{country.name.common}</h3>
                    <p><strong>Population:</strong> {new Intl.NumberFormat().format(country.population)}</p>
                    <p><strong>Region:</strong> {country.region}</p>
                    <p><strong>Capital:</strong> {country.capital}</p>
                    </div>
                </a>
                )
            })}
          </>
    )

}