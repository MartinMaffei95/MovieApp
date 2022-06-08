import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetchMoviesForGenre =(nOfPage,gender)=>{
    const [moviesForGenre, setMoviesForGenre] = useState()

    const getMoviesForGenre = ()=>{
        axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_PUBLIC_KEY}&page=${nOfPage}&&with_genres=${gender}`)
            .then(res =>{
                setMoviesForGenre(res)
            })
            .catch((err)=>{
              console.log(`ERROR : ${err.status_message}`)
            })
        }

        useEffect(()=>{
            getMoviesForGenre()
        },[])
        
    return [moviesForGenre]
}
