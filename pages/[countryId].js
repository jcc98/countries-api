export default function CountryInfo({countrySelected}) {

    const countryArray = countrySelected[0]
    const nativeName = Object.keys(countryArray.name.nativeName)
    let nativeNameEntries = []

    for (let i = 0; i < nativeName.length; i++) {
        nativeNameEntries.push(nativeName[i])
    }


    console.log(countryArray)
    console.log(nativeNameEntries)
    return (
        <div>
            <h2>{countryArray.name.common}</h2>
            <p>Native Name: {nativeNameEntries.map((name) => <p>{name}</p>)}</p>
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
