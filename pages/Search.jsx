import Head from 'next/head'
import Header from '../Modules/Header'
import SearchView from '../Modules/SearchView'

import { useContext, useEffect, useState } from "react"
import { MoviesContext } from "../context/AppProvider"
import { AppProvider } from '../context/AppProvider'


const Search = ()=>{

    
    const { STATE } = useContext(MoviesContext)
    const [ searchValue,setSearchValue ] = useState('')


    const capitalizeFirstLetter = (str)=> {
        let word = str.charAt(0).toUpperCase() + str.slice(1)
        return word
    }



    useEffect(()=>{
        setSearchValue(STATE.search.mySearch)
    },[STATE.search.mySearch])
    return(
        <>
            <Head>
                <title>MovieSite || {capitalizeFirstLetter(searchValue)} </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <SearchView>
            </SearchView>
        </>
    ) 

}

export default Search