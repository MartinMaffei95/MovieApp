import { BiUserCircle } from "react-icons/bi";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useContext } from "react"
import { MoviesContext } from "../context/AppProvider"

const Header = ()=>{
const { themeHandler } = useContext(MoviesContext)

    return(
        <header className="Header">
            <Link href='./'>
                <h1>MovieSite</h1>
            </Link>
            <SearchBar className="Header_SearchBar"/>
        {/* <BiUserCircle  className="userIcon"/> */}
        <button onClick={themeHandler}> Theme</button>
        </header>
    )
}

export default Header