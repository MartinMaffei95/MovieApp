import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetchMovie =(movieId)=>{
    const [movieData, setMovieData] = useState()

    const getMovie = ()=>{
        if(movieId==undefined) {return}else{
            axios.get(
                `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_PUBLIC_KEY}&language=es-ES`
                )
                .then(res =>{
                    console.log(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_PUBLIC_KEY}&language=es-ES`)
                    setMovieData(res)
                })
                .catch((err)=>{
                  console.log(`ERROR : ${err}`)
                })
            }
        
        }
            

        useEffect(()=>{
            getMovie()
        },[])
        
    return  [ movieData ]
}
export const getMovie =  (movieId)=>{
    if(movieId === undefined) {
        return
    }else{
         axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_PUBLIC_KEY}&language=es-ES`
            )
            .then(res =>{
                return res
            })
            .catch((err)=>{
              console.log(`ERROR : ${err}`)
            })
        }
    
    }
