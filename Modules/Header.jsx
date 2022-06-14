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
            {/* <ul>
                <li></li>
                <li>Peliculas</li>
                <li>Series</li>
            </ul> */}
        </header>
    )
}

export default Header