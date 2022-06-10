import { useContext, useEffect, useState } from "react"
import { MoviesContext } from "../context/AppProvider"
import { HelperIdToMovie } from "../Helpers/HelperMovieToId"
import HelperStarsVotes from "../Helpers/HelperStarsVotes"

import { BsFillXCircleFill } from "react-icons/bs";

const MovieModal =({action,isActive})=>{
    const {STATE , selectMovie, movieSelectObject} = useContext(MoviesContext)
    const [movieObject, setMovieObject]= useState()
    const [modalOpen,setModalOpen] = useState(isActive)

    useEffect(()=>{
         setMovieObject(STATE.movieSelected)
    },[movieSelectObject,movieObject])


    return(
        
        <div className={`MODAL ${isActive && 'active'}`}>

            {movieObject && 
            <div className="InsideModal">
                <img className="InsideModal_movieImg--backdrop"  src={`https://image.tmdb.org/t/p/w500/${movieObject.backdrop_path}`}></img>

                <h2 className="InsideModal_title" >{movieObject.title} </h2>
                <BsFillXCircleFill className="InsideModal_closeBtn"  onClick={action}/>
                {/* <button className="InsideModal_closeBtn"  onClick={action}> X </button> */}
                <p className="InsideModal_movieInfo" >{movieObject.overview}</p>
                <div className="InsideModal_movieGenres">Generos : {movieObject.genre_ids.map(g =>(<span key={g}>{HelperIdToMovie(g)}</span>))}</div>
                <span className="InsideModal_movieStars" >
                    {HelperStarsVotes(movieObject.vote_average)}
                    </span>
                <div className="InsideModal_movieImg">
                    <img className="InsideModal_movieImg--image"  src={`https://image.tmdb.org/t/p/w500/${movieObject.poster_path}`}></img>
                </div>
            
                <img className="Modal_backgroundImage" src={`https://image.tmdb.org/t/p/w500/${movieObject.poster_path}`}></img> {/* IMAGEN DE FONDO*/}
            </div>
            }
        </div>
    )
}

export default MovieModal