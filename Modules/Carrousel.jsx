import { useContext, useEffect, useRef, useState } from "react"
import {  BsChevronLeft,BsChevronRight } from "react-icons/bs";
import { HelperRouleteScrollings } from "../Helpers/HelperRouleteScrollings";
import { MoviesContext } from "../context/AppProvider"
import CarrouselCard from "../Molecules/CarrouselCard";


const MoviesCarrousel = ({action,moviegender})=>{
    const carrouselRef = useRef()
    const { STATE , selectMovie } = useContext(MoviesContext)
    const[ movies, setMovies] = useState()
    // console.log(STATE.recomended)
      useEffect(()=>{
        switch (moviegender) {
          case 'Action':
              setMovies(STATE.recomended.Action_Movies)
              break;
            case 'Horror':
              setMovies(STATE.recomended.Horror_Movies)
              break;
            case 'Drama':
              setMovies(STATE.recomended.Drama_Movies)
              break;
            case 'Romance':
              setMovies(STATE.recomended.Romance_Movies)
              break;
          default:
            break;
        }
      },[STATE])
      const [scrollingRight ,scrollingLeft] = HelperRouleteScrollings(carrouselRef)


    return(
        <div  className='CarrouselMovies_Container'>
          <h3 >{moviegender}:</h3>
          {movies ?
          <div ref={carrouselRef} className='CarrouselMovies'>
            {movies.data.results.map(m =>(
              <CarrouselCard 
                action={()=>{selectMovie(m),action(true)}}
                id={m.id}
                key={m.id}
                imgPath={m.poster_path} >
              </CarrouselCard>
            ))}
          </div> : (<p>cargando...</p>)
          }

        <BsChevronLeft className='CarrouselMovies_Arrow aLeft' onClick={scrollingLeft}> IZQ </BsChevronLeft>
        <BsChevronRight className='CarrouselMovies_Arrow aRight' onClick={scrollingRight}>  DER </BsChevronRight>
      </div>
    )
}

export default MoviesCarrousel