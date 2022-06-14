import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetchforTrending =(typeMedia,timeWind)=>{
    const [dataForTrending, setDataForTrending] = useState()

    const getDataForTrending = async ()=>{
        await axios.get(
            `https://api.themoviedb.org/3/trending/${typeMedia}/${timeWind}?api_key=${process.env.NEXT_PUBLIC_API_PUBLIC_KEY}`)
            .then(res =>{
                setDataForTrending(res)
            })
            .catch((err)=>{
              console.log(`ERROR : ${err.status_message}`)
            })
        }

        useEffect(()=>{
            getDataForTrending()
        },[])
        
    return [dataForTrending]
}