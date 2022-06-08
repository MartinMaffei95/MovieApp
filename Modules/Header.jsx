import { BiUserCircle } from "react-icons/bi";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Header = ()=>{
    return(
        <header className="Header">
            <Link href='./'>
                <h1>MovieSite</h1>
            </Link>
            <SearchBar/>
        <BiUserCircle  className="userIcon"/>

        </header>
    )
}

export default Header