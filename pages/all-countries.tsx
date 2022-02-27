import {useState} from "react"
import styled from "styled-components"

// interface CountriesProps {
//     altSpellings: string[],
//     area: number,
//     borders: string[],
//     capital: string[],
//     capitalInfo: string[],
//     car: 
//     coatOfArms:
//     continents:
//     currencies:
//     demonyms:
//     fifa:
//     flag:
//     flags:
//     idd:
//     independent:
//     landlocked:
//     languages:
//     latlng:
//     maps:
//     name:
//     population:
//     region:
//     startOfWeek:
//     status:
//     subregion:
//     timezones:
//     tld:
//     translations:
//     unMember:

// }

export const AllCountries = ({countries}:{countries:any}) => {
    const [filteredCountry, setFilteredCountry] = useState("")

    return(
        <>
                <input type="text" placeholder="Search for a country..." onChange={(e) => setFilteredCountry(e.target.value)} />
                <p>Filter by region</p>
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
                    <p>{country.name.common}</p>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                    </div>
                </a>
                )
            })}
          </>
    )

}