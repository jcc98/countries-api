import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all")
  const data = await res.json()

  return {
    props: {
      countries: data,
    }
  }
  
}

const Home: React.FC<any> = ({countries}) => {
  return (
    countries.map((country) => {
      return <p>{country.name.common}</p>
    })
  )
  }
export default Home
