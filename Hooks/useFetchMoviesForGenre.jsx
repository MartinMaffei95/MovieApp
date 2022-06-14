import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetchMoviesForGenre =(nOfPage,gender)=>{
    const [moviesForGenre, setMoviesForGenre] = useState()

    const getMoviesForGenre = async ()=>{
        await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_PUBLIC_KEY}&sort_by=popularity.desc&page=${nOfPage}&with_genres=${gender}&language=es-ES`)
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
