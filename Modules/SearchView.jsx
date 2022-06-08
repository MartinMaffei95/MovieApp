import { useContext, useEffect, useState } from "react"
import { MoviesContext } from "../context/AppProvider"
import SearchCard from "../Molecules/SearchCard"

const SearchView = ()=>{
    const { STATE, searchHandler } = useContext(MoviesContext)
    const [searchResults, setSearchResults] = useState(STATE.search.searchResults)

    console.log(searchResults)

    useEffect(()=>{
        setSearchResults(STATE.search.searchResults)
    },[STATE])
    return(
        
        <ul>
            
            {searchResults && searchResults.data.results.map(r =>
                <SearchCard 
                    key={r.id}
                    posterImg={r.poster_path}
                    name={r.title ? r.title : r.name}
                    TYPE={r.media_type}
                    description={r.overview}
                    votes={r.vote_average}
                    genresMedia={r.genre_ids && r.genre_ids}
                    id={r.id}
                    // For PERSON
                    gender={r.gender}
                    known_for={r.known_for}
                    known_for_department={r.known_for_department}
                    profile_path={r.profile_path}
                />
            )}
            
        </ul>
    )
}

export default SearchView