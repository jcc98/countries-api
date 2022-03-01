export default function CountryInfo({countrySelected}) {

    const countryArray = countrySelected[0]
    const nativeName = Object.values(countryArray.name.nativeName)
    const languagesArray = Object.values(countryArray.languages)
    console.log(countryArray)


    return (
        <div>
            <a href="/">Back</a>
            <img src={countryArray.flags.png}/>
            <h2>{countryArray.name.common}</h2>
            <p>Native Name: {nativeName.map((name, i, arr) => {
                if (arr.length -1 === i) {
                    return <span>{name.common}</span>
                } else {
                    return <span>{name.common}, </span>
                }
            })}</p>
            <p>Top Level Domain: {countryArray.tld}</p>
            <p>Population: {new Intl.NumberFormat().format(countryArray.population)}</p>
            <p>Currencies: {Object.values(countryArray.currencies)[0].name}</p>
            <p>Region: {countryArray.region}</p>
            <p>Languages: {languagesArray.map((language, i, arr) => { 
                if (arr.length - 1 === i) {
                    return <span>{language}</span>
                } else {
                    return <span>{language}, </span>
                }
             })}</p>
            <p>Sub Region: {countryArray.subregion}</p>
            <p>Capital: {countryArray.capital}</p>
            Border countries: {countryArray.borders && countryArray.borders.map((country) => country)}
                              {!countryArray.borders && "None"}
        </div>
    )
}

export async function getStaticProps({params}) {
    const res = await fetch (`https://restcountries.com/v3.1/name/${params.countryId}`)
    const results = await res.json()
    return {
        props: {
            countrySelected: results
        }
    }
}


export async function getStaticPaths() {
    const res = await fetch("https://restcountries.com/v3.1/all")
    const countries = await res.json()
    return {
        
        paths: countries.map(country => {
                return {
                    params: {
                        countryId:  country.name.common.toUpperCase()
                    }
                }
            }),
        fallback: false 
    }
}
