import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navigation } from './nav'
import styles from '../styles/Home.module.css'
import { AllCountries } from './all-countries'

export async function getServerSideProps() {
  const res = await fetch("https://restcountries.com/v2/all")
  const data = await res.json()

  return { props: { data }}
}

const Home: React.FC<any> = ({data}) => {
  return (
    <>

      <Navigation/>
      <AllCountries countries={data}/>

    </>
  )
  }
export default Home
