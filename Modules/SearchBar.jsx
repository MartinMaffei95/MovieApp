import Router from "next/router"
import { useContext, useEffect, useState } from "react"
import { MoviesContext } from "../context/AppProvider"

const SearchBar =()=>{

    const [ searchValue,setSearchValue ] = useState('')
    const [ findObject, setFindObject ] = useState()

    const { STATE, searchHandler } = useContext(MoviesContext)



    const handleSearchValue = (evt)=>{
            let mysearch = evt.target.value
            let normaliceSearch = mysearch.toLowerCase()
            setSearchValue(normaliceSearch)
    }
    const keySearchEvt =(evt)=>{
        if(evt.key ==='Enter'){
            if(searchValue === '') return
            searchHandler(searchValue)
            Router.push('./Search')
        }
    }

    return(
            <input  className="Header_SearchBar--SearchBar"
                    onKeyDown={keySearchEvt}
                    onChange={handleSearchValue}/>
    )
}

export default SearchBar