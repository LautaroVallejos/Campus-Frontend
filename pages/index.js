// import { Navbar } from '../components/Navbar'
// import {Footer} from '../components/Footer'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import herosection from '../components/herosection'
import Navbar from '../components/Navbar'
import Slideshow from '../components/Slideshow'
import NavbarX from '../components/NavbarX'


const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Campus JH</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <NavbarX /> */}

      <Slideshow/>

      

    </div>
  )
}

export default Home;