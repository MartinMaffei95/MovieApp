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
                    <div><img src={`https://image.tmdb.org/t/p/w500/${posterImg}`}/></div>
                    <div> Nombre: {name} -</div>
                    <div> Tipo: {TYPE} </div>
                    <div> Descripcion: {description}</div>
                    <div> {HelperStarsVotes(votes)}</div>
                    <div > Generos: {genresMedia && genresMedia.map(g =>(<span key={g}>{HelperIdToMovie(g)}</span>))}</div>
                </li>
            )
     } else if(TYPE === 'person'){
         return(
            <li className="searchResults" key={id}>
                <div><img src={`https://image.tmdb.org/t/p/w500/${profile_path}`}/></div>
                <div> Nombre: {name} -</div>
                <div> Proyetos destacados: {known_for.map(pd =>(<span key={pd.id}>{pd.original_title}</span>))}</div>
                {/* <div> Tipo: {TYPE} </div> */}
                <div> Profesion: {known_for_department}</div>
                {/* <div> {HelperStarsVotes(votes)}</div> */}
                {/* <div > Generos: {genresMedia.map(g =>(<span key={g}>{HelperIdToMovie(g)}</span>))}</div> */}
            </li>
         )
     }
}
export default SearchCard