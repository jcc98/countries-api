export default function CountryInfo({countrySelected}) {
    console.log(countrySelected[0].name.common)
    return (
        <div>
            {countrySelected[0].name.common}
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
