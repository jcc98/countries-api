import {useState} from "react"

export const AllCountries = ({countries}:{countries:any}) => {

    const [filteredCountry, setFilteredCountry] = useState("")

    return(
        <>
            <input type="text" placeholder="Search for a country..." onChange={(e) => setFilteredCountry(e.target.value)} />

            {countries.filter((word) => {
                if (filteredCountry === "") {
                    return word
                } else if (word.name.toLowerCase().includes(filteredCountry)) {
                    return word
                }
            }).map((country) => {
                return (
                <div className="country-card">
                    <div className="card-img"><img src={country.flags.png}/></div>
                    <div className="card-data">
                    <p>{country.name}</p>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                    </div>
                </div>
                )
            })}
          </>
    )

}