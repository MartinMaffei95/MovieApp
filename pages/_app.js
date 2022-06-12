import '../styles/globals.css'
import { AppProvider } from '../context/AppProvider'
import { MoviesContext } from "../context/AppProvider"
import { useContext } from "react"

function MyApp({ Component, pageProps }) {
  const { STATE } = useContext(MoviesContext)


  return(
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  ) 
}

export default MyApp
