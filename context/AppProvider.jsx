import { createContext, useEffect, useState } from "react"
import { useFetchMoviesForGenre } from "../Hooks/useFetchMoviesForGenre"
import { HelperMovieToId } from "../Helpers/HelperMovieToId";
import axios from "axios";
import { useThemeChange } from "../Hooks/useThemeChange";
import { useFetchforTrending } from "../Hooks/useFetchForTrending";



export const MoviesContext = createContext({})

export const AppProvider = ({children}) =>{
    const [ actionMovies ] = useFetchMoviesForGenre(1,HelperMovieToId('Action'));
    const [ horrorMovies ] = useFetchMoviesForGenre(1,HelperMovieToId('Horror'));
    const [ dramaMovies ] = useFetchMoviesForGenre(1,HelperMovieToId('Drama'));
    const [ romanceMovies ] = useFetchMoviesForGenre(1,HelperMovieToId('Romance'));

    const [ TrendingMoviesPerDay ] = useFetchforTrending('movie','day');
    const [ TrendingMoviesPerWeek ] = useFetchforTrending('movie','week');
    const [ TrendingSeriesPerDay ] = useFetchforTrending('tv','day');
    const [ TrendingSeriesPerWeek ] = useFetchforTrending('tv','week');


    const [movieSelectObject, setMovieSelectObject] = useState('')


    const [ search, setSearch] = useState('Buscar')
    const [searchResults, setSearchResults] = useState()
 
    const [themeSelected ,setThemeSelected] = useState('darkTheme')
    const [ theme ] = useThemeChange(themeSelected)


    const searchAction = (searchValue)=>{
        if(searchValue === '') return
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=d411e0bd612a6ab82a9bd25f0102e015&language=es-ES&query=${searchValue}&page=1&include_adult=true`)
        .then(res =>{
                setSearchResults(res)
            }
        )
    }
      

    const STATE = {
        recomended:{
            Action_Movies:actionMovies,
            Romance_Movies:romanceMovies,
            Drama_Movies:dramaMovies,
            Horror_Movies:horrorMovies
        },
        trending:{
            seriesLastDay:TrendingSeriesPerDay,
            seriesLastWeek:TrendingSeriesPerWeek,
            moviesLastDay:TrendingMoviesPerDay,
            moviesLastWeek:TrendingMoviesPerWeek
        }        
        ,
        search:{
            mySearch:search,
            searchResults:searchResults
        },
        movieSelected:movieSelectObject,
        theme:theme
    }
    
    const selectMovie = (movie)=>{
        setMovieSelectObject(movie)
      }

    const searchHandler =(search)=>{
        setSearch(search)
        searchAction(search)
    }

    const themeHandler = ()=>{
        if( themeSelected === 'lightTheme' ){
            setThemeSelected( 'darkTheme' )
        }else if( themeSelected === 'darkTheme' ){
            setThemeSelected( 'lightTheme' )
        }
    }

    useEffect(()=>{

    },[STATE])

    
    return(
        <MoviesContext.Provider value={{
            STATE,
            selectMovie,
            movieSelectObject, //Objeto movie
            searchHandler,
            themeHandler
            }}>
            {children}
        </MoviesContext.Provider>
        )
}



export async function getServerSideProps(){

    const [ actionMovies ] =    await useFetchMoviesForGenre(1,HelperMovieToId('Action'));
    const [ horrorMovies ] =    await useFetchMoviesForGenre(1,HelperMovieToId('Horror'));
    const [ dramaMovies ] =     await useFetchMoviesForGenre(1,HelperMovieToId('Drama'));
    const [ romanceMovies ] =   await useFetchMoviesForGenre(1,HelperMovieToId('Romance'));
    console.log(romanceMovies)
    return {
        props:{
            movies : [
                actionMovies,horrorMovies,dramaMovies,romanceMovies
            ],
            asd:'asd'
        }
    }
}

