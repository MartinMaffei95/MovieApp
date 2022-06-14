import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetchSeriesForGenre =(nOfPage,gender)=>{
    const [seriesForGenre, setSeriesForGenre] = useState()

    const getSeriesForGenre = async ()=>{
        await axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_PUBLIC_KEY}&sort_by=popularity.desc&page=${nOfPage}&with_genres=${gender}&language=es-ES`)
            .then(res =>{
                setSeriesForGenre(res)
            })
            .catch((err)=>{
              console.log(`ERROR : ${err.status_message}`)
            })
        }

        useEffect(()=>{
            getSeriesForGenre()
        },[])
        
    return [seriesForGenre]
}