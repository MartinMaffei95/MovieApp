import { HelperIdToMovie } from "../Helpers/HelperMovieToId"
import  HelperStarsVotes  from "../Helpers/HelperStarsVotes"


const SearchCard = ({
    posterImg,
    name,
    TYPE,
    description,
    votes,
    genresMedia,
    id,
    // For PERSON
    gender,
    known_for,
    known_for_department,
    profile_path
})=>{
    
    if(TYPE === 'movie'){
            return(
                <li className="searchResults" key={id}>
                    <div className="searchResults_image"><img className="searchResults_image--image" src={`https://image.tmdb.org/t/p/w500/${posterImg}`}/></div>
                    <div className="searchResults_name"> <p>Nombre:</p> {name} -</div>
                    <div className="searchResults_type"> <p>Tipo:</p> {TYPE} </div>
                    <div className="searchResults_description">  {description}</div>
                    <div className="searchResults_votes"> {HelperStarsVotes(votes)}</div>
                    <div className="searchResults_genre"> {genresMedia && genresMedia.map(g =>(<span key={g}>{HelperIdToMovie(g)}</span>))}</div>
                </li>
            )
     } else if(TYPE === 'person'){
         return(
            <li  className="searchResults" key={id}>
                <div className="searchResults_image">
                    <img className="searchResults_image--image" src={`https://image.tmdb.org/t/p/w500/${profile_path}`}/>
                    </div>
                <div className="searchResults_name" > <p>Nombre:</p> {name} -</div>
                <div className="searchResults_proyect"> <p>Proyetos destacados:</p> {known_for.map(pd =>(<span key={pd.id}>{pd.original_title}</span>))}</div>
                {/* <div> Tipo: {TYPE} </div> */}
                <div className="searchResults_profesion"> <p>Profesion:</p> {known_for_department}</div>
                {/* <div> {HelperStarsVotes(votes)}</div> */}
                {/* <div > Generos: {genresMedia.map(g =>(<span key={g}>{HelperIdToMovie(g)}</span>))}</div> */}
            </li>
         )
     }
}
export default SearchCard