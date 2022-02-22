export default function CountryInfo({countrySelected}) {

    const countryArray = countrySelected[0]
    const nativeName = Object.keys(countryArray.name.nativeName)
    const languagesArray = Object.values(countryArray.languages)

    const test = Object.values(Object.values(countryArray.name.nativeName))
    console.log(test)

    return (
        <div>
            <p>{test.map((tests) => <p>test</p>)}</p>
            <h2>{countryArray.name.common}</h2>
            <p>Native Name: {nativeName.map((name) => <p>{name}</p>)}</p>
            <p>Top Level Domain: {countryArray.tld}</p>
            <p>Population: {countryArray.population}</p>
            <p>Currencies: {Object.values(countryArray.currencies)[0].name}</p>
            <p>Region: {countryArray.region}</p>
            <p>Languages: {languagesArray.map((language) => <p>{language}</p>)}</p>
            <p>Sub Region:</p>
            <p>Capital:</p>
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
                        countryId:  country.name.common.toLowerCase()
                    }
                }
            }),
        fallback: false 
    }
}
