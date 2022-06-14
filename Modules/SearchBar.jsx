import Router from "next/router"
import { useContext, useEffect, useState } from "react"
import { MoviesContext } from "../context/AppProvider"
import {BsSearch} from "react-icons/bs"

const SearchBar =()=>{

    const [ searchValue,setSearchValue ] = useState('')
    const [ findObject, setFindObject ] = useState()
    const [ barActive, setBarActive] = useState(false)

    const { STATE, searchHandler } = useContext(MoviesContext)



    const activeSearcher =()=>{
        if (barActive){
            setBarActive(false)
        }else{
            setBarActive(true)
        }
    }

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
            <div className="Header_SearchBar">
            <input  className={`Header_SearchBar--SearchBar ${barActive ? 'active' : ''}`}
                    onKeyDown={keySearchEvt}
                    onChange={handleSearchValue}
                    placeholder={`${barActive ? 'Encontrá una pelicula!' : ''}`}
                    />
                    <BsSearch onClick={activeSearcher} className="Header_SearchBar--SearchBarIcon"/>
            </div> 
    )
}

export default SearchBar