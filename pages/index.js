import Head from 'next/head'
import Header from '../Modules/Header'
import { MoviesContext } from "../context/AppProvider"
import { AppProvider } from '../context/AppProvider'
import { useContext, useState } from "react"
import PrincipalView from '../Modules/PrincipalView'

const Home = ()=> {
  const [isActive,setIsActive] = useState(false);
  const { STATE , selectMovie } = useContext(MoviesContext)
    // STARS : BsStarFill BsStarHalf BsStar 
  // Favorite ICON: 
  


  return (
    <>
        <Head>
          <title>MovieSite || Home </title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>
        <PrincipalView></PrincipalView>
        <footer className='footer'>
          <div className='disclaimerDBContainer'>
            <p>Toda la informacion utilizada es obtenida de la API MovieDB</p>
            <a href='https://www.themoviedb.org/'> Quiero conocer MovieDb!</a>
          </div>
        </footer>
    </>
  )
}

export default Home
